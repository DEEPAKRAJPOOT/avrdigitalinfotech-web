<?php
/**
 * Contact / enquiry API for AVR Digital Infotech
 *
 * Upload the `api` folder to BigRock (e.g. public_html/api/) then set:
 *   VITE_CONTACT_API_URL=https://yourdomain.com/api/submit-enquiry.php
 *
 * Accepts JSON POST: name, email, phone_number, service, description
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'message' => 'API not configured. Copy config.example.php to config.php and add MySQL credentials.',
    ]);
    exit;
}

/** @var array{db_host:string,db_name:string,db_user:string,db_pass:string,db_charset?:string,table:string,allowed_origins:array} $config */
$config = require $configPath;

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed. Use POST.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '{}', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid JSON body.']);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone_number'] ?? ''));
$service = trim((string) ($data['service'] ?? ''));
$description = trim((string) ($data['description'] ?? ''));

$errors = [];
if ($name === '') {
    $errors['name'] = ['Name is required'];
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = ['Enter a valid email'];
}
if (strlen($phone) < 5) {
    $errors['phone_number'] = ['Phone number is required'];
}
if ($service === '') {
    $errors['service'] = ['Select a service'];
}
if (strlen($description) < 10) {
    $errors['description'] = ['Please add a brief description (at least 10 characters)'];
}

if ($errors !== []) {
    http_response_code(422);
    echo json_encode([
        'message' => 'Validation failed',
        'errors' => $errors,
    ]);
    exit;
}

$table = preg_replace('/[^a-zA-Z0-9_]/', '', (string) $config['table']);
if ($table === '') {
    http_response_code(500);
    echo json_encode(['message' => 'Invalid table name in config.']);
    exit;
}

$charset = $config['db_charset'] ?? 'utf8mb4';

try {
    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=%s',
        $config['db_host'],
        $config['db_name'],
        $charset
    );
    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Prefer AVR schema; fall back to common classified-style column names if needed.
    $sql = "INSERT INTO `{$table}` (`name`, `email`, `phone_number`, `service`, `description`, `source`)
            VALUES (:name, :email, :phone_number, :service, :description, :source)";

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone_number' => $phone,
            ':service' => $service,
            ':description' => $description,
            ':source' => 'website',
        ]);
    } catch (PDOException $inner) {
        // Fallback for older / classified tables without source or with phone/message columns
        $sqlFallback = "INSERT INTO `{$table}` (`name`, `email`, `phone`, `service`, `message`)
                        VALUES (:name, :email, :phone, :service, :message)";
        $stmt = $pdo->prepare($sqlFallback);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone' => $phone,
            ':service' => $service,
            ':message' => $description,
        ]);
    }

    $id = (int) $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        'message' => 'Thank you! Your enquiry has been submitted successfully.',
        'query' => [
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'phone_number' => $phone,
            'service' => $service,
        ],
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'message' => 'Could not save enquiry. Please try again later.',
        // Uncomment temporarily while debugging on BigRock:
        // 'debug' => $e->getMessage(),
    ]);
}

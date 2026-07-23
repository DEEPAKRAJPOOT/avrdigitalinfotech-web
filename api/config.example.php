<?php
/**
 * Copy this file to config.php and fill in your BigRock MySQL details.
 * config.php is gitignored — never commit real passwords.
 */

return [
    // MySQL (cPanel → MySQL Databases)
    'db_host' => 'localhost',
    'db_name' => 'YOUR_DB_NAME',
    'db_user' => 'YOUR_DB_USER',
    'db_pass' => 'YOUR_DB_PASSWORD',
    'db_charset' => 'utf8mb4',

    // Table name on BigRock (avr_enquiries or your classified enquiry table)
    'table' => 'avr_enquiries',

    // Allowed frontend origins for CORS (your live site + local Vite)
    'allowed_origins' => [
        'http://localhost:8080',
        'http://127.0.0.1:8080',
        'https://avrdigitalinfotech.com',
        'https://www.avrdigitalinfotech.com',
    ],
];

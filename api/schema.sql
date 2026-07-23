-- AVR Digital Infotech — contact / enquiry table for BigRock MySQL
-- Run once in phpMyAdmin (or MySQL console) if the table does not exist yet.

CREATE TABLE IF NOT EXISTS `avr_enquiries` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `phone_number` VARCHAR(40) NOT NULL,
  `service` VARCHAR(120) NOT NULL,
  `description` TEXT NOT NULL,
  `source` VARCHAR(60) NOT NULL DEFAULT 'website',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

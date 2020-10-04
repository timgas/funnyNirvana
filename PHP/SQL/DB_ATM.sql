-- --------------------------------------------------------
-- Сервер:                       127.0.0.1
-- Версія сервера:               5.7.29 - MySQL Community Server (GPL)
-- ОС сервера:                   Win64
-- HeidiSQL Версія:              11.0.0.5958
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for hw
CREATE DATABASE IF NOT EXISTS `hw` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `hw`;

-- Dumping structure for таблиця hw.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `balance` int(10) unsigned DEFAULT NULL,
  `currency_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`currency_id`) USING BTREE,
  KEY `FK_accounts_currencies` (`currency_id`),
  CONSTRAINT `FK_accounts_currencies` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  CONSTRAINT `FK_accounts_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.accounts: ~8 rows (приблизно)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`id`, `user_id`, `balance`, `currency_id`) VALUES
	(1, 1, 800, 3),
	(2, 1, 5500, 1),
	(3, 1, 9000, 2),
	(4, 2, 2500, 1),
	(5, 2, 3100, 3),
	(6, 3, 4500, 1),
	(7, 3, 9000, 2),
	(8, 3, 2500, 3);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Dumping structure for таблиця hw.amounts
CREATE TABLE IF NOT EXISTS `amounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cashbox_id` int(10) unsigned DEFAULT NULL,
  `value` int(10) unsigned DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cashbox_id` (`cashbox_id`,`value`),
  CONSTRAINT `FK_amounts_cashbox` FOREIGN KEY (`cashbox_id`) REFERENCES `cashbox` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.amounts: ~7 rows (приблизно)
/*!40000 ALTER TABLE `amounts` DISABLE KEYS */;
INSERT INTO `amounts` (`id`, `cashbox_id`, `value`, `quantity`) VALUES
	(1, 1, 100, 500),
	(2, 1, 500, 500),
	(3, 2, 200, 100),
	(4, 2, 100, 400),
	(5, 3, 100, 500),
	(6, 3, 200, 400),
	(7, 3, 500, 500);
/*!40000 ALTER TABLE `amounts` ENABLE KEYS */;

-- Dumping structure for таблиця hw.cashbox
CREATE TABLE IF NOT EXISTS `cashbox` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cashbox_currencies` (`currency_id`),
  CONSTRAINT `FK_cashbox_currencies` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.cashbox: ~3 rows (приблизно)
/*!40000 ALTER TABLE `cashbox` DISABLE KEYS */;
INSERT INTO `cashbox` (`id`, `city`, `model`, `currency_id`) VALUES
	(1, 'Poltava-centr', 'zks10540', 1),
	(2, 'Poltava-ognivka', 'fks10550', 2),
	(3, 'Poltava-sady', 'fs43132', 3);
/*!40000 ALTER TABLE `cashbox` ENABLE KEYS */;

-- Dumping structure for таблиця hw.currencies
CREATE TABLE IF NOT EXISTS `currencies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sign` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sign` (`sign`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.currencies: ~4 rows (приблизно)
/*!40000 ALTER TABLE `currencies` DISABLE KEYS */;
INSERT INTO `currencies` (`id`, `sign`, `name`) VALUES
	(1, 'PLN', 'Zloty(PL)'),
	(2, 'USD', 'Dollar(USA)'),
	(3, 'EUR', 'EURO(EU)'),
	(6, 'UAH', 'Hryvna');
/*!40000 ALTER TABLE `currencies` ENABLE KEYS */;

-- Dumping structure for таблиця hw.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `cashbox_id` int(10) unsigned DEFAULT NULL,
  `account_id` int(10) unsigned DEFAULT NULL,
  `amount` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_logs_cashbox` (`cashbox_id`),
  KEY `FK_logs_accounts` (`account_id`),
  CONSTRAINT `FK_logs_accounts` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `FK_logs_cashbox` FOREIGN KEY (`cashbox_id`) REFERENCES `cashbox` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.logs: ~12 rows (приблизно)
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` (`id`, `date`, `cashbox_id`, `account_id`, `amount`) VALUES
	(1, '2019-10-02 17:49:26', 1, 1, 200),
	(2, '2019-10-02 17:56:34', 1, 1, 100),
	(3, '2019-10-02 23:52:27', 1, 1, 500),
	(4, '2019-10-03 18:30:04', 2, 2, 1500),
	(5, '2019-11-05 07:35:30', 2, 3, 2400),
	(6, '2019-11-07 09:34:06', 2, 3, 500),
	(7, '2019-11-11 18:43:24', 2, 3, 2000),
	(8, '2019-11-10 18:46:38', 2, 2, 1000),
	(9, '2019-11-11 18:47:30', 2, 7, 2500),
	(10, '2019-11-12 08:47:21', 3, 8, 700),
	(11, '2019-11-13 11:49:22', 3, 6, 2500),
	(12, '2019-11-13 13:49:58', 3, 5, 2000);
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;

-- Dumping structure for таблиця hw.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(10) unsigned NOT NULL DEFAULT '18',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table hw.users: ~4 rows (приблизно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `age`) VALUES
	(1, 'Krist Novoselic', 26),
	(2, 'Kurt Cobein', 41),
	(3, 'Dave Grohl', 18),
	(4, 'Mick Jager', 34);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

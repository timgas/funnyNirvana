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


-- Dumping database structure for atm_store
CREATE DATABASE IF NOT EXISTS `atm_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `atm_store`;

-- Dumping structure for таблиця atm_store.cashbox_store
CREATE TABLE IF NOT EXISTS `cashbox_store` (
  `nominal` int(10) unsigned NOT NULL,
  `amount` int(10) unsigned NOT NULL,
  PRIMARY KEY (`nominal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table atm_store.cashbox_store: ~8 rows (приблизно)
/*!40000 ALTER TABLE `cashbox_store` DISABLE KEYS */;
INSERT INTO `cashbox_store` (`nominal`, `amount`) VALUES
	(5, 2),
	(10, 2),
	(20, 1),
	(50, 3),
	(100, 3),
	(200, 5),
	(500, 5),
	(1000, 5);
/*!40000 ALTER TABLE `cashbox_store` ENABLE KEYS */;

-- Dumping structure for таблиця atm_store.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datatime` int(20) DEFAULT NULL,
  `withdrawal_amount` int(10) unsigned DEFAULT NULL,
  `balanceBefore` int(10) unsigned DEFAULT NULL,
  `balanceAfter` int(10) unsigned DEFAULT NULL,
  `errorMessage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table atm_store.logs: ~0 rows (приблизно)
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

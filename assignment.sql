-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2024 at 06:43 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `case`
--

CREATE TABLE `case` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `case`
--

INSERT INTO `case` (`id`, `name`, `owner`) VALUES
(1, 'Dreams & Nightmares Case', 'long'),
(2, 'Dreams & Nightmares Case', 'long'),
(3, 'Dreams & Nightmares Case', 'lit'),
(4, 'Dreams & Nightmares Case', 'lit'),
(5, 'Dreams & Nightmares Case', 'lit');

-- --------------------------------------------------------

--
-- Table structure for table `cases`
--

CREATE TABLE `cases` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `buy_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cases`
--

INSERT INTO `cases` (`id`, `name`, `image`, `buy_price`) VALUES
('0', 'Gamma Case', 'src/assets/images/case/case5.png', 31),
('1', 'Revolution Case', 'src/assets/images/case/case4.png', 61),
('2', 'Fracture Case', 'src/assets/images/case/case2.png', 64),
('3', 'Dreams & Nightmares Case', 'src/assets/images/case/case1.png', 25),
('4', 'Recoil Case', 'src/assets/images/case/case6.png', 37),
('5', 'Snakebite Case', 'src/assets/images/case/case3.png', 52);
('6', 'Gamma Case', 'src/assets/images/case/case5.png', 22),
('7', 'Revolution Case', 'src/assets/images/case/case4.png', 33),
('8', 'Fracture Case', 'src/assets/images/case/case2.png', 42),
('9', 'Dreams & Nightmares Case', 'src/assets/images/case/case1.png', 31),
('10', 'Recoil Case', 'src/assets/images/case/case6.png', 53),

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `credit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `email`, `password`, `credit`) VALUES
('lit', 'longth0903@gmail.com', '123', 323),
('long', 'longth090@gmail.com', '123', 77);

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `idoffer` int(11) NOT NULL,
  `caseid` varchar(45) NOT NULL,
  `seller` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `buyer` varchar(45) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`idoffer`, `caseid`, `seller`, `price`, `buyer`, `date`) VALUES
(10, '2', 'lit', 123, 'long', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `case`
--
ALTER TABLE `case`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`idoffer`,`caseid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `case`
--
ALTER TABLE `case`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cases`
--
ALTER TABLE `cases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `idoffer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Create the e-commDB database
DROP DATABASE IF EXISTS `e-commDB`;
CREATE DATABASE `e-commDB`;
USE `e-commDB`;

Drop table if exists `customer`; -- Used to drop table if it exists
CREATE TABLE customer (
    customer_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName varchar(60) NOT NULL,
    lName varchar(60) NOT NULL,
    CONSTRAINT pk_customer PRIMARY KEY (customer_id)
);

-- Add to table after creation
-- ------------------------------
ALTER TABLE customer 
ADD COLUMN last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- Create item Table
-- --------------------------------
Drop table if exists `item`;
CREATE TABLE item (
    item_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    item VARCHAR(40) NOT NULL,
    category VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image TINYTEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_item PRIMARY KEY (item_id)
);

-- --------------------------------
Drop table if exists `subtotal`;
CREATE TABLE subtotal (
    subtotal_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_subtotal PRIMARY KEY (subtotal_id)
);

-- --------------------------------
Drop table if exists `tax`;
CREATE TABLE tax (
    tax_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_tax PRIMARY KEY (tax_id)
);

-- --------------------------------
Drop table if exists `total`;
CREATE TABLE total (
    total_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_total PRIMARY KEY (total_id)
);

Drop table if exists `transaction`;
CREATE TABLE transaction (
    transaction_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    transaction_date DATE NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_transaction PRIMARY KEY (transaction_id)
);


-- Need to have a foriegn key
Drop table if exists `meal`;
CREATE TABLE meal (
    meal_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName varchar(60) NOT NULL,
    lName varchar(60) NOT NULL,
    item VARCHAR(40) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    image TINYTEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_meal PRIMARY KEY (meal_id)
);

-- Need to have a foriegn key
Drop table if exists `favSteak`;
CREATE TABLE favSteak (
    favSteak_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName varchar(60) NOT NULL,
    lName varchar(60) NOT NULL,
    email VARCHAR(40) NOT NULL,
    restuarant VARCHAR(40) NOT NULL,
    steak VARCHAR(40) NOT NULL,
    image TINYTEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_favSteak PRIMARY KEY (favSteak_id)
);
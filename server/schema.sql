CREATE TABLE children (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT 0,
    isActive BOOLEAN DEFAULT 0,
    creationDate TIMESTAMP NOT NULL,

    avatar VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) DEFAULT "",
    surname VARCHAR(255) DEFAULT "",
    sex VARCHAR(255) DEFAULT "",
    birthDate DATE DEFAULT "",
    height INT DEFAULT 150,
    shoesSize VARCHAR(55) DEFAULT "",
    city VARCHAR(55) DEFAULT "",
    eyeColor VARCHAR(55) DEFAULT "",
    hairColor VARCHAR(55) DEFAULT "",
    specialization VARCHAR(55) DEFAULT "",
    video VARCHAR(255) DEFAULT ""
);

CREATE TABLE children_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) UNIQUE NOT NULL,
    childId INT NOT NULL,

    FOREIGN KEY(childId) REFERENCES children(id)
);

ALTER TABLE children ADD secondVideo VARCHAR(255) DEFAULT "";

CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    months INT NOT NULL,
    price INT NOT NULL
);

INSERT INTO subscriptions(title, months, price) VALUES ("Подписка на год", 12, 7000);
INSERT INTO subscriptions(title, months, price) VALUES ("Подписка на полгода", 6, 5000);
INSERT INTO subscriptions(title, months, price) VALUES ("Подписка на месяц", 1, 2000);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telegramId INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    subscriptionEnd TIMESTAMP DEFAULT NULL,
    ts TIMESTAMP DEFAULT NULL,
);

CREATE TABLE user_payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    subscriptionId INT NOT NULL,
    price INT NOT NULL,
    ts TIMESTAMP DEFAULT NULL,

    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (subscriptionId) REFERENCES subscriptions(id)
);
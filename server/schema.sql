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
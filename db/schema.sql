DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("CheeseBurger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("BigMAC", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("DoubleQuarterPounder", true);
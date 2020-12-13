DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("CheeseBurger", true);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("BigMAC", true);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("DoubleQuarterPounder", true);
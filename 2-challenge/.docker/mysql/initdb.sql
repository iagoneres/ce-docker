CREATE DATABASE IF NOT EXISTS codeeducation_db;
CREATE TABLE IF NOT EXISTS codeeducation_db.people(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(id)
);
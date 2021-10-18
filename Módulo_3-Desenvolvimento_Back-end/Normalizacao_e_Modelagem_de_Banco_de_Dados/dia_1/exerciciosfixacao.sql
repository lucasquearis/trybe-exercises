    DROP SCHEMA IF EXISTS Albuns;
    CREATE SCHEMA Albuns;
    USE Albuns;

    CREATE TABLE artista(
        artista_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE estilo_musical(
        estilo_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE album(
        album_id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        preço INT NOT NULL,
        estilo_id INT NOT NULL,
        artista_id INT NOT NULL,
        FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
        FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
    );

    CREATE TABLE cancao(
        cancao_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES album (album_id)
    );
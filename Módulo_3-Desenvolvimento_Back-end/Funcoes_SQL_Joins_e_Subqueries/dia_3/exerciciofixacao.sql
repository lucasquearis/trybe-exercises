
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorIDWithTotalFilms()
BEGIN
SELECT 
    actor_id, COUNT(film_id) AS `filmes atuados`
FROM
    sakila.film_actor
GROUP BY actor_id
ORDER BY `filmes atuados` DESC
LIMIT 10;
END $$

DELIMITER ;

CALL ShowActorIDWithTotalFilms();

DELIMITER $$
CREATE PROCEDURE ShowAllFilmsByCategory(IN param VARCHAR(150))
BEGIN	
SELECT 
    film_id AS `id do filme`,
    (SELECT 
            film_id
        FROM
            film AS f
        WHERE
            f.film_id = fc.film_id) AS titulo,
    category_id AS `id de sua categoria`,
    (SELECT 
            c.`name`
        FROM
            category AS c
        WHERE
            c.category_id = fc.category_id) AS `nome da categoria`
FROM
    film_category AS fc
    HAVING `nome da categoria` LIKE CONCAT('%', param, '%');
END $$

DELIMITER ;

CALL ShowAllFilmsByCategory('acti');

USE sakila;
DELIMITER $$
CREATE PROCEDURE CheckEmailActiveCustomer(IN param VARCHAR(200))
BEGIN
SELECT active FROM customer WHERE email = param;
END $$

DELIMITER ;

CALL CheckEmailActiveCustomer('MARY.SMITH@sakilacustomer.org');

USE sakila;
DELIMITER $$

CREATE FUNCTION GetPaymentsByCusomer(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_payments INT;
SELECT 
    COUNT(*)
FROM
    payment
WHERE
    customer_id = id INTO total_payments;
RETURN total_payments;
END $$
DELIMITER ;

SELECT GetPaymentsByCusomer(1);

USE sakila;
DELIMITER $$

CREATE FUNCTION getFilmNameByInvetoryID(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
DECLARE film_title VARCHAR(200);
SELECT 
    (SELECT 
            title
        FROM
            film AS f
        WHERE
            i.film_id = f.film_id)
FROM
    inventory AS i
WHERE
    inventory_id = id INTO film_title;
    RETURN film_title;
END $$
DELIMITER ;

 SELECT getFilmNameByInvetoryID(24);

 USE sakila;
DELIMITER $$

CREATE FUNCTION quantityFilmsByCategory(param VARCHAR(200))
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
DECLARE category_quantity INT;
SELECT 
    (SELECT 
            COUNT(*)
        FROM
            film_category AS fc
        WHERE
            fc.category_id = c.category_id) AS `quantidade de filmes`
FROM
    category AS c
WHERE
    `name` = param INTO category_quantity;
    RETURN category_quantity;
END $$
DELIMITER ;

SELECT quantityFilmsByCategory('Animation');

USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_automoveis_insert
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERT',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO carros(preco) VALUES (25000);

USE betrybe_automoveis

DELIMITER $$
CREATE TRIGGER trigger_automoveis_update
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'UPDATE';
END $$

DELIMITER ;

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_automoveis_delete
	AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao,data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END $$

DELIMITER ;

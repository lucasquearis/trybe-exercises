use sakila;

DELIMITER $$

CREATE FUNCTION quantityActions(inputNumber int)
RETURNS INT READS SQL DATA
BEGIN
DECLARE resultNumber INT;
SELECT COUNT(*)
FROM payment
WHERE customer_id = inputNumber INTO resultNumber;
RETURN resultNumber;
END $$

DELIMITER ;

SELECT quantityActions(2);

DELIMITER $$

CREATE FUNCTION filmNameById(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
DECLARE nameFilm VARCHAR(100);
SELECT 
    (SELECT 
            f.title
        FROM
            film AS f
        WHERE
            f.film_id = i.film_id)
FROM
    inventory AS i
WHERE
    i.inventory_id = id INTO nameFilm;
RETURN nameFilm;
END $$

DELIMITER ;

SELECT FILMNAMEBYID(50);

DELIMITER $$

CREATE FUNCTION numberFilmsByCategoryName(categoryInput VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE result INT;
SELECT (
	SELECT COUNT(*) FROM film_category as fc WHERE fc.category_id = c.category_id
)
FROM category AS c
WHERE c.name = categoryInput INTO result;
RETURN result;
END $$

DELIMITER ;

SELECT numberFilmsByCategoryName('Children');
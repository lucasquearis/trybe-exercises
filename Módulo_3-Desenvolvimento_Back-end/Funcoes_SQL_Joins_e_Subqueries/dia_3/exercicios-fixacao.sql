use sakila;
DROP PROCEDURE mostPopularActor;
DELIMITER $$
create procedure mostPopularActor()
BEGIN
	SELECT 
    a.actor_id,
    a.first_name,
		(
			SELECT count(*) from film_actor as f where a.actor_id = f.actor_id
		) as `Número de filmes atuados`
    from actor as a
		ORDER BY `Número de filmes atuados` DESC
        LIMIT 10;
END $$

DELIMITER ;

CALL mostPopularActor();

-- Id do filme, title, id_category, nome da categoria; 

USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN category VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film f
    INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;
-- CALL FindMovieByCategory('Action');



DROP PROCEDURE checkEmailActive;

DELIMITER $$

CREATE PROCEDURE checkEmailActive(IN email_input VARCHAR(200), OUT isActive BOOL)
BEGIN
	SET isActive = (
		SELECT active email FROM customer WHERE email = email_input
    );
END $$
DELIMITER ;

SELECT @ActiveEmail;
CALL checkEmailActive('MARY.SMITH@sakilacustomer.org', @ActiveEmail);
SELECT @ActiveEmail;
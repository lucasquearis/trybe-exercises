CREATE VIEW film_with_categories AS
    SELECT 
        (SELECT 
                f.title
            FROM
                film AS f
            WHERE
                f.film_id = fc.film_id) AS title,
        category_id,
        (SELECT 
                c.`name`
            FROM
                category AS c
            WHERE
                c.category_id = fc.category_id) AS `name`
    FROM
        film_category AS fc
    ORDER BY title ASC;
    
SELECT * from film_with_categories;

CREATE VIEW film_info AS
    SELECT 
        fc.actor_id,
        (SELECT 
                CONCAT(first_name, ' ', last_name)
            FROM
                actor AS a
            WHERE
                a.actor_id = fc.actor_id) AS actor,
        (SELECT 
                title
            FROM
                film AS f
            WHERE
                fc.film_id = f.film_id)
    FROM
        film_actor AS fc
    ORDER BY actor;
    
SELECT 
    *
FROM
    film_info;

CREATE VIEW address_info AS
    SELECT a.address_id, a.address, a.district, a.city_id, c.city
    FROM sakila.address a
    INNER JOIN sakila.city c ON c.city_id = a.city_id
    ORDER BY c.city;

CREATE VIEW movies_languages AS
    SELECT f.title, f.language_id, l.name AS language
    FROM sakila.film f
    INNER JOIN sakila.language l ON l.language_id = f.language_id;

CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

CREATE INDEX postal_code_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

ALTER TABLE locations CHANGE COLUMN region_name region VARCHAR(25);

ALTER TABLE locations CHANGE COLUMN country_name country VARCHAR(40);
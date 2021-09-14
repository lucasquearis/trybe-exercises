use sakila;
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name = 'Julia';
UPDATE sakila.actor 
SET 
    first_name = (CASE first_name
        WHEN 'Julia' THEN 'Jules'
        ELSE first_name
    END);
SELECT 
    *
FROM
    category;
UPDATE sakila.category 
SET 
    name = (CASE name
        WHEN 'Sci-Fi' THEN 'Science Fiction'
        ELSE name
    END);
SELECT 
    *
FROM
    film;
UPDATE sakila.film 
SET 
    rental_rate = 25
WHERE
    length > 100
        AND (rating IN ('G' , 'PG', 'PG-13'))
        AND replacement_cost > 20;
UPDATE sakila.film 
SET 
    rental_rate = (CASE
        WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
        ELSE rental_rate
    END);
    
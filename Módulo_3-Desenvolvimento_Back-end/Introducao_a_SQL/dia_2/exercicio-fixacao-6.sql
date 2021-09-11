SELECT 
    COUNT(*)
FROM
    sakila.rental;
SELECT 
    *
FROM
    sakila.rental
LIMIT 10;
SELECT 
    *
FROM
    sakila.rental
ORDER BY rental_date DESC
LIMIT 10 OFFSET 3
;
use sakila;
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%ace%';
SELECT 
    *
FROM
    sakila.film
WHERE
    description LIKE '%china';
SELECT 
    *
FROM
    sakila.film
WHERE
    description LIKE '%girl%'
        AND title LIKE '%lord';
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '___gon%';
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '___gon%'
        AND description LIKE '%documentary%';
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%academy'
        OR title LIKE '%mosquito';
SELECT 
    *
FROM
    sakila.film
WHERE
    description LIKE '%monkey%'
        AND description LIKE '%sumo%';
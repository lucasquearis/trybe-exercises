SELECT 
    rating, AVG(length) AS `Tempo médio`
FROM
    sakila.film
GROUP BY rating
HAVING `Tempo médio` BETWEEN 115.0 AND 121.50
ORDER BY `Tempo médio` DESC;

SELECT rating, SUM(replacement_cost) as `Preço Total Substrituição`
FROM sakila.film
GROUP by rating
HAVING `Preço Total Substrituição` > 3950.50
Order by `Preço Total Substrituição` ASC;
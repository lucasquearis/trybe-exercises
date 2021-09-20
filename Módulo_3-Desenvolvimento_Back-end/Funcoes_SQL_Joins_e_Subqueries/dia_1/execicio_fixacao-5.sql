SELECT 
    AVG(length) as `Média de Duração`
FROM
    film;
SELECT 
    MIN(length)
FROM
    film;
SELECT 
    MAX(length)
FROM
    film;
SELECT 
    SUM(length)
FROM
    film;
SELECT 
    COUNT(*) AS `Filmes Registrados`
FROM
    film;
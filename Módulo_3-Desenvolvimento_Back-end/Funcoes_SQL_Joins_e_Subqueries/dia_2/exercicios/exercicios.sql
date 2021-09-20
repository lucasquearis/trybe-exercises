use Pixar;
SELECT 
    *
FROM
    BoxOffice;
SELECT 
    *
FROM
    Movies;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
SELECT 
    m.title, b.rating
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id
ORDER BY title DESC;
SELECT 
    *
FROM
    Theater;
SELECT 
    t.`name`,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
    Theater AS t
        LEFT JOIN
    Movies AS m ON t.id = m.theater_id
ORDER BY t.name;
SELECT 
    m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    t.`name`,
    t.location
FROM
    Movies AS m
        RIGHT JOIN
    Theater AS t ON t.id = m.theater_id;
SELECT 
    m.title, b.rating
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id
WHERE
    rating > 7.5;
SELECT 
    title,
    (SELECT 
            rating
        FROM
            BoxOffice
        WHERE
            id = movie_id) AS rating
FROM
    Movies AS m;
SELECT 
    title,
    (SELECT 
            rating
        FROM
            BoxOffice
        WHERE
            movie_id = m.id) AS rating
FROM
    Movies AS m
WHERE
    `year` > 2009;
SELECT 
    m.title, b.rating
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON m.id = b.movie_id
WHERE
    `year` > 2009;
SELECT 
    t.`name`, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            theater_id = t.id);
		SELECT 
    t.`name`, t.location
FROM
    Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            theater_id = t.id);
SELECT 
    *
FROM
    Movies AS m
        INNER JOIN
    Theater AS t ON m.theater_id = t.id
WHERE
    rating IN (SELECT 
            rating
        FROM
            BoxOffice
        WHERE
            rating > 8);
SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies AS t1,
    Movies AS t2
WHERE
    t1.director = t2.director;
SELECT 
    m.title
FROM
    Movies AS m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            BoxOffice AS b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;

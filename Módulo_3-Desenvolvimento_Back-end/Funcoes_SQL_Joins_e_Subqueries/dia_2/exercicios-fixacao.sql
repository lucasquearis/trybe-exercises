SELECT 
    act.actor_id, act.first_name, film.film_id
FROM
    sakila.actor AS act
        INNER JOIN
    film_actor AS film ON act.actor_id = film.actor_id;
SELECT 
    s.first_name, s.last_name, a.address
FROM
    staff AS s
        INNER JOIN
    address AS a ON s.address_id = a.address_id;
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM
    customer AS c
        INNER JOIN
    address AS a ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;
SELECT 
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    customer AS c
        INNER JOIN
    address AS a ON a.address_id = c.address_id
WHERE
    district = 'California'
        AND c.first_name LIKE '%rene%';
SELECT 
    c.first_name, COUNT(a.address_id)
FROM
    customer AS c
        INNER JOIN
    address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;
SELECT 
    staff.first_name, staff.last_name, AVG(pay.amount)
FROM
    staff AS staff
        INNER JOIN
    payment AS pay ON pay.staff_id = staff.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY first_name , last_name;
SELECT 
    a.actor_id, a.first_name, fa.film_id, f.title
FROM
    actor AS a
        INNER JOIN
    film_actor AS fa ON fa.actor_id = a.actor_id
        INNER JOIN
    film AS f ON f.film_id = fa.film_id;
use sakila;
SELECT 
    *
FROM
    sakila.payment
WHERE
    payment_id IN (269 , 239, 126, 399, 142);
SELECT 
    *
FROM
    sakila.address
WHERE
    district IN ('QLD' , 'Nagasaki',
        'California',
        'Attika',
        'Mandalay',
        'Nantou',
        'Texas');
SELECT 
    first_name, last_name, email
FROM
    sakila.customer
WHERE
    last_name IN ('hicks' , 'crawford',
        'henry',
        'boyd',
        'mason',
        'morales',
        'kennedy');
SELECT 
    email
FROM
    sakila.customer
WHERE
    address_id IN (172 , 173, 174, 175, 176);
SELECT 
    COUNT(payment_id)
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT 
    title, release_year, rental_duration
FROM
    sakila.film
WHERE
    rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC , title;
SELECT 
    title, rating
FROM
    sakila.film
WHERE
    rating IN ('G' , 'PG', 'PG-13');
SELECT 
    *
FROM
    sakila.rental
WHERE
    DATE(rental_date) = '2005-05-25';
SELECT 
    COUNT(*)
FROM
    sakila.rental
WHERE
    DATE(rental_date) BETWEEN '2005-01-01' AND '2005-08-22';
SELECT 
    DATE(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    YEAR(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    MONTH(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    DAY(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    HOUR(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    MINUTE(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    SECOND(rental_date)
FROM
    sakila.rental
WHERE
    rental_id = 10330;
SELECT 
    *
FROM
    sakila.rental
WHERE
    return_date BETWEEN '2005-07-28 22:00:00' AND NOW()
ORDER BY return_date ASC;
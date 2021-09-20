SELECT 
    COUNT(active), active
FROM
    customer
GROUP BY active;

SELECT 
    COUNT(*), active, store_id
FROM
    customer
GROUP BY store_id , active;
SELECT 
    AVG(rental_duration) AS rental_duration, rating
FROM
    film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;
SELECT 
    district, COUNT(*)
FROM
    address
GROUP BY district
ORDER BY COUNT(*) DESC;
SELECT 
    first_name, last_name
FROM
    staff 
UNION ALL SELECT 
    first_name, last_name
FROM
    actor;
(SELECT 
    first_name
FROM
    customer
WHERE
    first_name LIKE '%tracy%') UNION (SELECT 
    first_name
FROM
    actor
WHERE
    first_name LIKE '%je%');
(SELECT 
    first_name
FROM
    actor
ORDER BY first_name DESC
LIMIT 5) UNION (SELECT 
    first_name
FROM
    staff
LIMIT 1) UNION (SELECT 
    first_name
FROM
    customer
LIMIT 5 OFFSET 15) ORDER BY first_name ASC;
(SELECT 
    first_name, last_name
FROM
    customer) UNION (SELECT 
    first_name, last_name
FROM
    actor) ORDER BY first_name , last_name LIMIT 15 OFFSET 45;
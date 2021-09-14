use sakila;
SELECT 
    *
FROM
    sakila.staff;
insert into `sakila`.`staff`(first_name, last_name, email, password, username, address_id, store_id, active)
values ('Lucas', 'Santos', 'lucasquearis@hotmail.com', '12345678', 'Luki', 2, 1, 1);
insert into `sakila`.`staff`(first_name, last_name, email, password, username, address_id, store_id, active)
values
	('Andressa', 'Costa', 'andressa@hotmail.com', '12345678', 'And', 5, 1, 1),
    ('Daniele', 'Quearis', 'dani@hotmail.com', '12345678', 'Dani', 6, 1, 1);
SELECT 
    first_name, last_name
FROM
    sakila.staff
LIMIT 5;
insert into sakila.actor (first_name, last_name)
select first_name, last_name from sakila.staff limit 5;
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE 'Lucas';
SELECT 
    *
FROM
    sakila.category;
    insert into sakila.category (name) values
    ('Youtube'),
    ('Twitch'),
    ('DailyVlogs');
SELECT 
    *
FROM
    sakila.store;
insert into sakila.store (manager_staff_id, address_id)
values (7, 7);

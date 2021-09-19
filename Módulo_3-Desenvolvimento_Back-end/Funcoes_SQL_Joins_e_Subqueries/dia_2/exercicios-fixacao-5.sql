use hotel;
SELECT 
    Id, Title
FROM
    Books AS b
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Books_Lent
        WHERE
            b.Id = Book_id);
SELECT 
    *
FROM
    Books;
SELECT 
    *
FROM
    Books_Lent;
SELECT 
    Id, Title
FROM
    Books AS b
WHERE
    EXISTS( SELECT 
            *
        FROM
            Books_Lent
        WHERE
            Title LIKE '%lost%');
SELECT 
    *
FROM
    CarSales;
SELECT 
    *
FROM
    Customers;
SELECT 
    `Name`
FROM
    Customers AS c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            CarSales
        WHERE
            c.CustomerId = CarSales.CustomerID);
SELECT 
    *
FROM
    Cars;
SELECT 
    *
FROM
    Customers;
SELECT 
    *
FROM
    CarSales;
SELECT 
    c.`Name`, car.`Name`
FROM
    Customers AS c
        INNER JOIN
    Cars AS car
WHERE
    EXISTS( SELECT 
            *
        FROM
            CarSales AS cs
        WHERE
            cs.CarID = car.id AND cs.CarID = car.id);
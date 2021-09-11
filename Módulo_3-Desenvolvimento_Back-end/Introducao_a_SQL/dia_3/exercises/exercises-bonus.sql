use Scientists;
SELECT 
    *
FROM
    Scientists.Scientists
WHERE
    Name LIKE '%e%';
SELECT 
    Name
FROM
    Scientists.Projects
WHERE
    Name LIKE 'a%'
ORDER BY Name ASC;
SELECT 
    Code, Name
FROM
    Scientists.Projects
WHERE
    Code LIKE '%3%'
ORDER BY Code ASC;
SELECT 
    Scientist
FROM
    Scientists.AssignedTo
WHERE
    Project IN ('AeH3' , 'Ast3', 'Che1');
SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours > 500;
SELECT 
    *
FROM
    Scientists.Projects
WHERE
    Hours BETWEEN 250 AND 800;
SELECT 
    Name, Code
FROM
    Scientists.Projects
WHERE
    Name NOT LIKE 'a%';
SELECT 
    Name
FROM
    Scientists.Projects
WHERE
    Code LIKE '%h%';
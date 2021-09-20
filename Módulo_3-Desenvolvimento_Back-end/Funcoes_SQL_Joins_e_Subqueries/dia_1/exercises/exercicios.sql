SELECT 
    MAX(SALARY)
FROM
    employees;
SELECT 
    MAX(salary) - MIN(salary)
FROM
    employees;
SELECT 
    JOB_ID, AVG(SALARY)
FROM
    employees
GROUP BY JOB_ID
ORDER BY AVG(salary) ASC;
SELECT 
    SUM(salary)
FROM
    employees;
SELECT 
    ROUND(MAX(salary), 2) AS `Maior Salário`,
    ROUND(MIN(salary), 2) AS `Menor Salário`,
    ROUND(SUM(salary), 2) AS `Total Salários`,
    ROUND(AVG(salary), 2) AS `Média Salarial`
FROM
    employees;
SELECT 
    COUNT(*)
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG';
SELECT 
    SUM(salary)
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG';
SELECT 
    SUM(salary), job_id
FROM
    employees
GROUP BY job_id;
SELECT 
    SUM(salary), job_id
FROM
    employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
SELECT 
    AVG(salary), job_id
FROM
    employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY AVG(salary);
SELECT 
    AVG(salary), COUNT(*)
FROM
    employees
GROUP BY department_id
HAVING COUNT(*) > 10;
SELECT 
    *
FROM
    employees;
SELECT 
    REPLACE(phone_number, '515', '777')
FROM
    employees;
SELECT 
    *
FROM
    employees
WHERE
    LENGTH(first_name) >= 8;
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM
    employees;
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM
    employees;
    SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM
    employees;
SELECT 
    UCASE(FIRST_NAME)
FROM
    employees;
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    employees
WHERE
    YEAR(HIRE_DATE) = ('1987')
        AND MONTH(HIRE_DATE) = ('7');
SELECT 
    FIRST_NAME, LAST_NAME, DATEDIFF(NOW(), HIRE_DATE)
FROM
    employees;
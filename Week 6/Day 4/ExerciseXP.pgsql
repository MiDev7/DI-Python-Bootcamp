-- Task 1
SELECT first_name AS First_Name , last_name AS Last_Name
FROM employees;

-- Task 2
SELECT  DISTINCT ON (department_id) department_id ,first_name, last_name
FROM employees;

-- Task 3
SELECT *
FROM employees
ORDER BY first_name DESC;

-- Task 4
SELECT concat(first_name,' ',last_name) as full_name, salary, (0.15* salary) as PF
FROM employees;

-- Task 5
SELECT employee_id, concat(first_name,' ',last_name) as full_name , salary
FROM employees
ORDER BY salary ASC;

-- Task 6
SELECT sum(salary) salaries
FROM employees;
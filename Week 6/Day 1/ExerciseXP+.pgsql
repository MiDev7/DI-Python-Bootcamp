
SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students
WHERE id = 2;

SELECT first_name, last_name FROM students
WHERE last_name = 'Marc' AND first_name ='Benichou';

SELECT first_name, last_name FROM students
WHERE last_name = 'Marc' OR first_name ='Benichou';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a%';

SELECT first_name, last_name FROM students
WHERE first_name LIKE 'a%';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a_';

SELECT first_name, last_name FROM students
WHERE id = 3 AND id = 1;

SELECT * FROM students
WHERE birth_date >= '1/01/2000';


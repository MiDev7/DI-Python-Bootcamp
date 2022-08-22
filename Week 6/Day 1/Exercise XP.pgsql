-- 1st task
SELECT * FROM customers;
SELECT * FROM items;

-- 2nd task
SELECT * FROM items
WHERE price > 80;

-- 3rd task
SELECT * FROM items
WHERE price < 300;

-- 4th task
SELECT * FROM customers
WHERE last_name = 'Smith';

-- 5th task
SELECT * FROM customers
WHERE last_name = 'Jones';

-- 6th task
SELECT * FROM customers
WHERE last_name != 'Jones';
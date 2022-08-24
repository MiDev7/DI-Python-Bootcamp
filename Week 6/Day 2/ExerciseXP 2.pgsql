-- SELECT * FROM  customer;

SELECT concat(first_name,'  ',last_name) AS full_name FROM customer LIMIT 10;


-- Task 13
SELECT f.film_id, title FROM film f
LEFT JOIN inventory i 
ON i.film_id = f.film_id
WHERE i.film_id ISNULL ORDER BY title;

SELECT * FROM payment;

SELECT customer.customer_id , concat(first_name,'  ',last_name) AS full_name ,payment.amount,payment.payment_date, payment.staff_id
FROM customer
INNER JOIN payment 
ON customer.customer_id = payment.payment_id;


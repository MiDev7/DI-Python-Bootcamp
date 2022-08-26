SELECT * FROM film;
SELECT * FROM language;

-- Task 1: Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE replacement_cost < 15;

-- Task 2: Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- Task 3: We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- We should check as it has a CONSTRAINT delete cascade which could eventually delete over table linked to it.

-- Task 4: Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(*) FROM rental    
WHERE return_date ISNULL;

-- Task 5: Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM payment;

SELECT inventory.inventory_id, film.rental_rate,film.title 
FROM (rental JOIN inventory ON rental.inventory_id = inventory.inventory_id)
JOIN film ON inventory.film_id = film.film_id
WHERE return_date ISNULL  
ORDER BY film.rental_rate DESC
LIMIT 30;


-- Task 6: Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT * FROM rental;
SELECT * FROM actor_info
WHERE first_name = 'Penelope' AND last_name = 'Monroe';

SELECT * FROM film
WHERE lower(description) LIKE '%sumo wrestler%';


-- Park Citizen
SELECT film.film_id, film.title
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE lower(description) LIKE '% sumo wrestler%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';


-- Crossing Divorce
SELECT film.film_id,film.title FROM film
WHERE film.length < 60 AND rating = 'R'AND lower(film.description) LIKE '%documentary%';

-- Sugar Wonka
SELECT film.film_id, film.title
FROM film
JOIN inventory
ON  film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
WHERE film.rental_rate > '4.00'AND rental.return_date > '28/07/2005' AND rental.return_date < '01/08/2005' AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' ;


-- Stone Fire
SELECT film.film_id, film.title
FROM film
JOIN inventory
ON  film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'  AND (lower(film.title) LIKE '%boat%' OR lower(description) LIKE '%boat%')  
ORDER BY replacement_cost DESC 
LIMIT 1;


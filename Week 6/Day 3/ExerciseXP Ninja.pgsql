-- ExerciseXP Ninja

-- ExerciseXP 1
SELECT film.film_id, film.title,rental.rental_date, rental.return_date,film.rating
FROM film
JOIN inventory
ON  film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE (film.rating = 'G' OR film.rating = 'PG') AND (rental.rental_date ISNULL OR rental.return_date IS NULL);


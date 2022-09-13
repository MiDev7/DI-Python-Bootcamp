from datetime import datetime
from django.utils import timezone

from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Director(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name

class Title(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.DateTimeField(default=datetime.now)
    created_in_country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, related_name="created_in_country")
    available_in_countries = models.ManyToManyField(Country)
    category = models.ManyToManyField(Category)
    director = models.ManyToManyField(Director)

    def __str__(self):
        return self.title


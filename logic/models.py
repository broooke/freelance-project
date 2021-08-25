from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=300, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    short_description = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.IntegerField(default=0)
    partner = models.CharField(max_length=400, null=True, blank=True)
    discount = models.IntegerField(default=0)

    def __str__(self):
        return self.name
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField

# Create your models here.
class seoUser(models.Model):
    #main_user
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #telephone
    phone = models.CharField(max_length=15)
    #country
    country = CountryField()
    
    
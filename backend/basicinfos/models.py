from django.db import models

from User.models import SurveyorProfile

class BasicInformation(models.Model):
    country = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    zone = models.CharField(max_length=100)
    woreda = models.CharField(max_length=100)
    kebele = models.CharField(max_length=100)
    nearest_health_facility = models.CharField(max_length=100)
    house_number = models.CharField(max_length=20)
    head_of_household_name = models.CharField(max_length=100)
    head_of_household_phone_number = models.CharField(max_length=20)
    location = models.TextField()  
    surveyor = models.ForeignKey(SurveyorProfile, on_delete=models.SET_NULL, null=True, related_name='basic_information')  
    submission_date = models.DateField(auto_now_add=True)
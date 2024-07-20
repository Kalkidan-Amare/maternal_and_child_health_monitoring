from django.db import models
from basicinfos.models import BasicInformation

class ChildInformation(models.Model):
    basic_information = models.ForeignKey(BasicInformation, on_delete=models.SET_NULL, null=True, blank=True,  related_name='child_info')
    name = models.CharField(max_length=100)
    age_in_months = models.PositiveIntegerField()
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')])
    vaccination_status = models.BooleanField()
    health_card_verification = models.CharField(max_length=15, choices=[('Verified', 'Verified'), ('Not Verified', 'Not Verified')])
    date_of_birth = models.DateField()
    location = models.TextField()  
    surveyor = models.TextField()  
    submission_date = models.DateField(auto_now_add=True)

class ChildFollowUp(models.Model):
    child_information = models.ForeignKey(ChildInformation, on_delete=models.SET_NULL, null=True, blank=True,  related_name='follow_up')
    weight = models.FloatField()
    muac = models.BooleanField()
    vitamins = models.BooleanField()
    deworming = models.BooleanField()
    polio = models.BooleanField()
    pcv = models.BooleanField()
    rotavirus = models.BooleanField()
    diphtheria = models.BooleanField()
    tetanus = models.BooleanField()
    measles = models.BooleanField()
    trachoma_screening = models.BooleanField()
    location = models.TextField()  
    surveyor = models.TextField()  
    submission_date = models.DateField(auto_now_add=True)

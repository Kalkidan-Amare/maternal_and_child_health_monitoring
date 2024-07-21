from django.db import models
from accounts.models import SurveyorProfile
from basicinfos.models import BasicInformation

class ChildInformation(models.Model):
    basic_information = models.ForeignKey(BasicInformation, on_delete=models.SET_NULL, null=True, blank=True,  related_name='child_info')
    name = models.CharField(max_length=100)
    age_in_months = models.PositiveIntegerField()
    sex = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')])
    vaccination_status = models.TextField() 
    health_card_verified = models.BooleanField(default=False)
    date_of_birth = models.DateField()
    location = models.TextField()  
    surveyor = models.ForeignKey(SurveyorProfile, on_delete=models.SET_NULL, related_name='child_information', null=True, blank=True)  
    submission_date = models.DateField(auto_now_add=True)

class ChildFollowUp(models.Model):
    child_information = models.ForeignKey(ChildInformation, on_delete=models.SET_NULL, null=True, blank=True,  related_name='follow_up')
    weight = models.FloatField()
    muac = models.FloatField()
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
    surveyor = models.ForeignKey(SurveyorProfile, on_delete=models.SET_NULL, related_name='child_follow_up', null=True, blank=True)  
    submission_date = models.DateField(auto_now_add=True)

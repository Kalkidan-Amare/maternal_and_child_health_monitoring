from django.db import models
from basicinfos.models import BasicInformation

class MotherInformation(models.Model):
    basic_information = models.ForeignKey(BasicInformation, on_delete=models.SET_NULL, null=True, blank=True, related_name='mother_info')
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    age = models.PositiveIntegerField()
    pregnant_or_lactating = models.CharField(max_length=10, choices=[('Pregnant', 'Pregnant'), ('Lactating', 'Lactating')])
    antenatal_care_received_previously = models.BooleanField()
    details_of_previous_antenatal_care = models.TextField(blank=True, null=True)
    location = models.TextField() 
    surveyor = models.TextField() 
    submission_date = models.DateField(auto_now_add=True)

class AntenatalFollowUp(models.Model):
    mother_information = models.ForeignKey(MotherInformation,on_delete=models.SET_NULL, null=True, blank=True, related_name='antenatal_follow_up')
    antenatal_pills = models.BooleanField()
    tetanus_and_other_related_vaccinations = models.BooleanField()
    iron_folic_acid = models.BooleanField()
    weight = models.FloatField()
    muac = models.FloatField()
    deworming = models.BooleanField()
    blood_pressure_systolic = models.PositiveIntegerField(blank=True, null=True)
    blood_pressure_diastolic = models.PositiveIntegerField(blank=True, null=True)
    syphilis_screening = models.BooleanField()
    location = models.TextField() 
    surveyor = models.TextField() 
    submission_date = models.DateField(auto_now_add=True)

class PostnatalFollowUp(models.Model):
    mother_information = models.ForeignKey(MotherInformation,on_delete=models.SET_NULL, null=True, blank=True, related_name='postnatal_follow_up')
    muac = models.FloatField()
    blood_pressure_systolic = models.PositiveIntegerField(blank=True, null=True)
    blood_pressure_diastolic = models.PositiveIntegerField(blank=True, null=True)
    weight = models.FloatField()
    blood_loss = models.BooleanField()
    infections = models.BooleanField()
    breastfeeding_issues = models.BooleanField()
    location = models.TextField() 
    surveyor = models.TextField() 
    submission_date = models.DateField(auto_now_add=True)

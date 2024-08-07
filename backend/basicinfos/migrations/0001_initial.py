# Generated by Django 5.0.7 on 2024-07-21 10:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BasicInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=100)),
                ('zone', models.CharField(max_length=100)),
                ('woreda', models.CharField(max_length=100)),
                ('kebele', models.CharField(max_length=100)),
                ('nearest_health_facility', models.CharField(max_length=100)),
                ('house_number', models.CharField(max_length=20)),
                ('head_of_household_name', models.CharField(max_length=100)),
                ('head_of_household_phone_number', models.CharField(max_length=20)),
                ('location', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('surveyor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='basic_information', to='accounts.surveyorprofile')),
            ],
        ),
    ]

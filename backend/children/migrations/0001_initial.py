# Generated by Django 5.0.7 on 2024-07-21 10:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
        ('basicinfos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChildInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age_in_months', models.PositiveIntegerField()),
                ('sex', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6)),
                ('vaccination_status', models.TextField()),
                ('health_card_verified', models.BooleanField(default=False)),
                ('date_of_birth', models.DateField()),
                ('location', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('basic_information', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='child_info', to='basicinfos.basicinformation')),
                ('surveyor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='child_information', to='accounts.surveyorprofile')),
            ],
        ),
        migrations.CreateModel(
            name='ChildFollowUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.FloatField()),
                ('muac', models.FloatField()),
                ('vitamins', models.BooleanField()),
                ('deworming', models.BooleanField()),
                ('polio', models.BooleanField()),
                ('pcv', models.BooleanField()),
                ('rotavirus', models.BooleanField()),
                ('diphtheria', models.BooleanField()),
                ('tetanus', models.BooleanField()),
                ('measles', models.BooleanField()),
                ('trachoma_screening', models.BooleanField()),
                ('location', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('surveyor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='child_follow_up', to='accounts.surveyorprofile')),
                ('child_information', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='follow_up', to='children.childinformation')),
            ],
        ),
    ]

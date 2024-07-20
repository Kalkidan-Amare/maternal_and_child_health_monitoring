# Generated by Django 5.0.7 on 2024-07-20 15:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('basicinfos', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='MotherInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(blank=True, max_length=20, null=True)),
                ('age', models.PositiveIntegerField()),
                ('pregnant_or_lactating', models.CharField(choices=[('Pregnant', 'Pregnant'), ('Lactating', 'Lactating')], max_length=10)),
                ('antenatal_care_received_previously', models.BooleanField()),
                ('details_of_previous_antenatal_care', models.TextField(blank=True, null=True)),
                ('location', models.TextField()),
                ('surveyor', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('basic_information', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='mother_info', to='basicinfos.basicinformation')),
            ],
        ),
        migrations.CreateModel(
            name='AntenatalFollowUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('antenatal_pills', models.BooleanField()),
                ('tetanus_and_other_related_vaccinations', models.BooleanField()),
                ('iron_folic_acid', models.BooleanField()),
                ('weight_gain', models.BooleanField()),
                ('muac', models.BooleanField()),
                ('deworming', models.BooleanField()),
                ('blood_pressure_systolic', models.PositiveIntegerField(blank=True, null=True)),
                ('blood_pressure_diastolic', models.PositiveIntegerField(blank=True, null=True)),
                ('syphilis_screening', models.BooleanField()),
                ('location', models.TextField()),
                ('surveyor', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('mother_information', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='antenatal_follow_up', to='mothers.motherinformation')),
            ],
        ),
        migrations.CreateModel(
            name='PostnatalFollowUp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('muac', models.FloatField()),
                ('blood_pressure_systolic', models.PositiveIntegerField(blank=True, null=True)),
                ('blood_pressure_diastolic', models.PositiveIntegerField(blank=True, null=True)),
                ('weight', models.FloatField()),
                ('blood_loss', models.BooleanField()),
                ('infections', models.BooleanField()),
                ('breastfeeding_issues', models.BooleanField()),
                ('location', models.TextField()),
                ('surveyor', models.TextField()),
                ('submission_date', models.DateField(auto_now_add=True)),
                ('mother_information', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='postnatal_follow_up', to='mothers.motherinformation')),
            ],
        ),
    ]

# Generated by Django 5.0.7 on 2024-07-20 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mothers', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='antenatalfollowup',
            name='muac',
            field=models.FloatField(),
        ),
    ]

# Generated by Django 3.2.12 on 2022-11-26 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('igoMaster', '0011_auto_20221123_0001'),
    ]

    operations = [
        migrations.AddField(
            model_name='etablishmentsubtype',
            name='image',
            field=models.CharField(default='AUCUNE IMAGE', max_length=150),
        ),
    ]

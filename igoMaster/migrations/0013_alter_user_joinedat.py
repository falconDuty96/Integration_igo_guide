# Generated by Django 3.2.16 on 2022-12-02 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('igoMaster', '0012_etablishmentsubtype_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='JoinedAt',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]

# Generated by Django 4.1.5 on 2023-01-11 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectmodel',
            name='project_desc',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]

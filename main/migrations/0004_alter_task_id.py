# Generated by Django 4.0.6 on 2022-07-07 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_task_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

from django.db import models

# Create your models here.

# class Student:
#     name=models.CharField
#     student_id=


class StudentTable(models.Model):
    student_id = models.ForeignKey
    owner = models.IntegerField(default=00)
    subject = models.CharField(max_length=20)
    ia1 = models.IntegerField()
    ia2 = models.IntegerField()
    endsem = models.IntegerField()
    termwork = models.IntegerField()


class TeacherTable(models.Model):
    teacher_id: models.ForeignKey
    student_name = models.CharField(max_length=20)
    owner = models.IntegerField(default=00)
    student_roll = models.IntegerField(default=0)
    ia1 = models.IntegerField()
    ia2 = models.IntegerField()
    endsem = models.IntegerField()
    termwork = models.IntegerField()

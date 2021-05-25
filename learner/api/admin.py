from django.contrib import admin
from .models import StudentTable,TeacherTable
# Register your models here.
admin.site.register(StudentTable)
admin.site.register(TeacherTable)
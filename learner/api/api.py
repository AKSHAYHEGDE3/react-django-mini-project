from rest_framework import viewsets, permissions
from .serializers import StudentTableSerializer, TeacherTableSerializer
from .models import StudentTable, TeacherTable


class StudentTableViewSet(viewsets.ModelViewSet):
    queryset = StudentTable.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = StudentTableSerializer


class TeacherTableViewSet(viewsets.ModelViewSet):
    queryset = TeacherTable.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = TeacherTableSerializer

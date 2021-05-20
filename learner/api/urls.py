
from rest_framework import routers
from .api import StudentTableViewSet, TeacherTableViewSet
from .views import StudentData, StudentTables, TeacherTables, StudentEvaluation, TeacherBulk
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from .views import current_user, UserList

router = routers.DefaultRouter()
router.register('studenttable', StudentTableViewSet, 'student')
router.register('teachertable', TeacherTableViewSet, 'teacher')

urlpatterns = [
    path('sort', StudentData.as_view()),
    path('student', StudentTables.as_view()),
    path('teacher', TeacherTables.as_view()),
    path('bulk', TeacherBulk.as_view()),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('eval', StudentEvaluation.as_view()),
]

urlpatterns += router.urls

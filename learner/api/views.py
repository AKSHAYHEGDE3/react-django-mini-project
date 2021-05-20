from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import generics, status
from .models import StudentTable, TeacherTable
from .serializers import StudentTableSerializer, TeacherTableSerializer

# Create your views here.
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentData(APIView):
    permission_classes = (permissions.AllowAny,)
    lookup_url_kwarg = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwarg)
        sort = TeacherTable.objects.filter(owner=owner)
        fast = []
        slow = []
        med = []
        if(len(sort) > 0):
            for i in sort:
                if(i.ia1 < 10):
                    slow.append(i.student_roll)
                elif(i.ia1 < 15):
                    med.append(i.student_roll)
                else:
                    fast.append(i.student_roll)
        data = {'fast': fast, 'med': med, 'slow': slow}
        return JsonResponse(data, status=status.HTTP_200_OK)


class StudentEvaluation(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = StudentTableSerializer
    lookup_url_kwarg = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwarg)
        studSub = StudentTable.objects.filter(owner=owner)
        sum1 = 0
        res = 0
        for i in studSub:
            sum1 += (i.ia1+i.ia2+i.termwork+i.endsem)
        percentage = (sum1/(len(studSub)*145))*100
        if percentage > 80:
            res = 2
        elif percentage > 40:
            res = 1
        else:
            res = 0
        return Response(res, status=status.HTTP_200_OK)


class StudentTables(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = StudentTableSerializer
    lookup_url_kwarg = 'owner'

    def get(self, request, format=None):
        data1 = []
        owner = request.GET.get(self.lookup_url_kwarg)
        print(owner)
        data = StudentTable.objects.filter(owner=owner)
        for i in data:
            data1.append(StudentTableSerializer(i).data)

        return Response(data1, status=status.HTTP_200_OK)


class TeacherTables(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TeacherTableSerializer
    lookup_url_kwargs = 'owner'

    def get(self, request, format=None):
        owner = request.GET.get(self.lookup_url_kwargs)
        data = TeacherTable.objects.filter(owner=owner)
        data1 = []
        for i in data:
            data1.append(TeacherTableSerializer(i).data)
        return Response(data1, status=status.HTTP_200_OK)

    # def patch(self,request,format=None):

    # def post(self, request, fromat=None):
    #     for req in request:
    #         serializer = self.serializer_class(data=req.data)
    #         if serializer.is_valid():
    #             student_roll = serializer.data.get('student_roll')
    #             student_name = serializer.data.get('student_name')
    #             ia1 = serializer.data.get('ia1')
    #             ia2 = serializer.data.get('ia2')
    #             termwork = serializer.data.get('termwork')
    #             endsem = serializer.data.get('endsem')
    #             owner1 = serializer.data.get('owner')
    #         student = TeacherTable(student_name=student_name, student_roll=student_roll,
    #                                ia1=ia1, ia2=ia2, termwork=termwork, endsem=endsem, owner=owner1)
    #         print(student)
    #         student.save()
    #         # return Response(TeacherTableSerializer(student), status=status.HTTP_200_OK)


class TeacherBulk(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TeacherTableSerializer

    def post(self, request, fromat=None):
        response = []
        for req in request.data:
            serializer = self.serializer_class(data=req)
            if serializer.is_valid():
                print(serializer.data)
                response.append(serializer.data)
                print('valid')
                student_roll = serializer.data.get('student_roll')
                student_name = serializer.data.get('student_name')
                ia1 = serializer.data.get('ia1')
                ia2 = serializer.data.get('ia2')
                termwork = serializer.data.get('termwork')
                endsem = serializer.data.get('endsem')
                owner1 = serializer.data.get('owner')
                student = TeacherTable(student_name=student_name, student_roll=student_roll,
                                       ia1=ia1, ia2=ia2, termwork=termwork, endsem=endsem, owner=owner1)
                print(student)
                student.save()

            else:
                print('INvalid')
                print(request.data)
        print(response)
        return JsonResponse({'resp': response}, status=status.HTTP_200_OK)
        # if serializer.is_valid():

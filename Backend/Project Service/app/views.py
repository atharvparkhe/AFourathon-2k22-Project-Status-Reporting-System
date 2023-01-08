from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *


class ProjectsView(ListCreateAPIView):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectModelSerializer
class ProjectRUDView(RetrieveUpdateDestroyAPIView):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectModelSerializer
    lookup_field = id


class ModuleView(ListCreateAPIView):
    queryset = ModuleModel.objects.all()
    serializer_class = ModuleModelSerializer
class ModuleRUDView(RetrieveUpdateDestroyAPIView):
    queryset = ModuleModel.objects.all()
    serializer_class = ModuleModelSerializer
    lookup_field = id


class TaskView(ListCreateAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskModelSerializer
class TaskRUDView(RetrieveUpdateDestroyAPIView):
    queryset = TaskModel.objects.all()
    serializer_class = TaskModelSerializer
    lookup_field = id
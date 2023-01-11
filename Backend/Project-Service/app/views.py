from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *


class ProjectsView(ListCreateAPIView):
    queryset = ProjectModel.objects.all().order_by("-created_at")
    serializer_class = AllProjectModelSerializer
class ProjectRUDView(RetrieveUpdateDestroyAPIView):
    queryset = ProjectModel.objects.all().order_by("-created_at")
    serializer_class = ProjectModelSerializer
    lookup_field = "id"



@api_view(["GET"])
def get_modules(request, pro_id):
    try:
        project_obj = ProjectModel.objects.get(id = pro_id)
        if not project_obj:
            return Response({"message":"Invalid Project ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        module_objs = ModuleModel.objects.filter(project = project_obj)
        ser = ModuleModelSerializer(module_objs, many = True)
        return Response({"data": ser.data}, status=status.HTTP_200_OK)
    except Exception as e:
            return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ModuleRUDView(RetrieveUpdateDestroyAPIView):
    queryset = ModuleModel.objects.all().order_by("-created_at")
    serializer_class = ModuleModelSerializer
    lookup_field = "id"



@api_view(["GET"])
def get_tasks(request, mod_id):
    try:
        module_obj = ModuleModel.objects.get(id = mod_id)
        if not module_obj:
            return Response({"message":"Invalid Project ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        task_objs = TaskModel.objects.filter(module = module_obj)
        ser = TaskModelSerializer(task_objs, many = True)
        return Response({"data": ser.data}, status=status.HTTP_200_OK)
    except Exception as e:
            return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class TaskRUDView(RetrieveUpdateDestroyAPIView):
    queryset = TaskModel.objects.all().order_by("-created_at")
    serializer_class = TaskModelSerializer
    lookup_field = "id"
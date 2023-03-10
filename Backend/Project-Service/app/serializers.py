from rest_framework import serializers
from .models import *


class AllProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectModel
        fields = ["id", "project_name", "project_desc"]

class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectModel
        exclude = ["created_at", "updated_at"]


class ModuleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleModel
        exclude = ["created_at", "updated_at"]


class TaskModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        exclude = ["created_at", "updated_at"]


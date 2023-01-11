from rest_framework import serializers
from .models import *


class TeamAssignmentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamAssignmentModel
        exclude = ["created_at", "updated_at"]


class TaskAssignmentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskAssignmentModel
        exclude = ["created_at", "updated_at"]


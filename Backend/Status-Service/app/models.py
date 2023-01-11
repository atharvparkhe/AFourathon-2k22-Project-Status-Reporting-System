from django.db import models
import uuid


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True


class TeamAssignmentModel(BaseModel):
    team_id = models.CharField(max_length=50)
    module_id = models.CharField(max_length=50)
    comment = models.TextField(null=True, blank=True)


class TaskAssignmentModel(BaseModel):
    task_id = models.CharField(max_length=50)
    emp_id = models.CharField(max_length=50)
    hours_spent = models.FloatField(default=0)
    comment = models.TextField(null=True, blank=True)


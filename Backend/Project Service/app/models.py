from django.db import models
import uuid


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True


class ProjectModel(BaseModel):
    project_name = models.CharField(max_length=50)
    project_start_date = models.DateField(auto_now=False, auto_now_add=False)
    project_end_date = models.DateField(auto_now=False, auto_now_add=False)
    project_manager_id = models.CharField(max_length=50)
    def __str__(self):
        return self.project_name


class ModuleModel(BaseModel):
    module_name = models.CharField(max_length=50)
    project = models.ForeignKey(ProjectModel, related_name="project_module", on_delete=models.CASCADE)
    def __str__(self):
        return self.module_name


class TaskModel(BaseModel):
    task = models.CharField(max_length=50)
    module = models.ForeignKey(ModuleModel, related_name="module_task", on_delete=models.CASCADE)
    def __str__(self):
        return self.task


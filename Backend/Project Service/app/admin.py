from django.contrib import admin
from .models import *


# Project Model
admin.site.register(ProjectModel)

# Module Model
admin.site.register(ModuleModel)

# Task Model
admin.site.register(TaskModel)

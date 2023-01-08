from django.urls import path
from . import views
from .views import *


urlpatterns = [

	path('projects/', views.ProjectsView.as_view(), name="projects"),
	path('project/<id>/', views.ProjectRUDView.as_view(), name="project"),
	
	path('modules/', views.ModuleView.as_view(), name="modules"),
	path('module/<id>/', views.ModuleRUDView.as_view(), name="module"),
	
	path('tasks/', views.TaskView.as_view(), name="tasks"),
	path('task/<id>/', views.TaskRUDView.as_view(), name="task"),

]
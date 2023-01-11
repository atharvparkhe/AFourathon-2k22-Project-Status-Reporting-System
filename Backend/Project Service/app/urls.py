from django.urls import path
from . import views
from .views import *


urlpatterns = [

	path('all-projects/', views.ProjectsView.as_view(), name="all-projects"),
	path('project/<id>/', views.ProjectRUDView.as_view(), name="project"),
	
	path('get-modules/<pro_id>/', views.get_modules, name="get-modules"),
	path('module/<id>/', views.ModuleRUDView.as_view(), name="module"),
	
	path('get-tasks/<mod_id>/', views.get_tasks, name="get-tasks"),
	path('task/<id>/', views.TaskRUDView.as_view(), name="task"),

]
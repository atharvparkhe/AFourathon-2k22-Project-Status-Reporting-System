from django.urls import path
from . import views
from .views import *


urlpatterns = [

# Members Auth 
	path('signup/', views.signUp, name="signup"),
	path('login/', views.logIn, name="login"),
	path('forgot/', views.forgot, name="forgot"),
	path('reset/', views.reset, name="reset"),

# Admin Auth
	path('admin-signup/', views.admin_signUp, name="signup"),
	path('admin-login/', views.admin_logIn, name="login"),
	path('admin-forgot/', views.admin_forgot, name="forgot"),
	path('admin-reset/', views.admin_reset, name="reset"),

# Employee Operations
	path("add-employee-bulk/", views.add_employee_data, name="add-employee-bulk"),
	path("add-employee/", views.add_employee, name="add-employee-single"),

]
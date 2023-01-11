from django.urls import path
from . import views
from .views import *


urlpatterns = [

	path('all-blog/', views.BlogGet.as_view(), name="blogG"),

]
from django.urls import path
from . import views


app_name = 'recipes'

urlpatterns = [
    path('', views.RecipesView.as_view(), name='recipes_list'),
]

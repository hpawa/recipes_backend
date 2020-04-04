from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Recipe
from .serializers import RecipeSerializer


class ResultsSetPagination(PageNumberPagination):
    page_size = 40
    page_size_query_param = 'page_size'
    max_page_size = 1000


class RecipesView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    pagination_class = ResultsSetPagination

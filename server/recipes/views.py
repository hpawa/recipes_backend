from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Recipe
from .serializers import ListRecipeSerializer, SingleRecipeSerializer


class ResultsSetPagination(PageNumberPagination):
    page_size = 40
    page_size_query_param = 'page_size'
    max_page_size = 1000


class ListRecipesView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = ListRecipeSerializer
    pagination_class = ResultsSetPagination


class SingleRecipeView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = SingleRecipeSerializer

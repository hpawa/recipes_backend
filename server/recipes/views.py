from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer


class RecipesView(APIView):
    def get(self, request):
        recieps = Recipe.objects.all()
        serializer = RecipeSerializer(recieps, many=True)
        return Response({"recipes": serializer.data})

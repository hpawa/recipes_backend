from rest_framework import serializers
from .models import Recipe, Grade, Category
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ('id', 'value')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('description', 'poster')


class RecipeSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    grades = GradeSerializer(read_only=True, many=True)
    categories = CategorySerializer(read_only=True, many=True)

    class Meta:
        model = Recipe
        fields = ('id', 'owner', 'slug', 'description', 'cook_time',
                  'prep_time', 'grades', 'categories', 'dtcreate', 'views')
        depth = 2

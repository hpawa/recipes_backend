from django.test import TestCase, Client
from django.urls import reverse
from ..models import Recipe, Category, Ingridient, Step
from django.contrib.auth.models import User
from ..serializers import RecipeSerializer
from rest_framework import status


client = Client()


class RecipesList(TestCase):
    def setUp(self):
        self.Ivan = User.objects.create_user(username='Ivan', password='qwerty')
        Category.objects.create(title='у Павлика', poster='poster_url')
        Category.objects.create(title='Гурбау', poster='poster_url')
        Ingridient.objects.create(title='Фарш', description='сырой', prots=1000, fats=2, carbs=30, calories=124)
        Ingridient.objects.create(title='Кукуруза', description='желтая', prots=1, fats=4, carbs=60, calories=42)
        Ingridient.objects.create(title='Фасоль', description='красная', prots=3, fats=25, carbs=22, calories=53)
        ingridients = Ingridient.objects.all()
        categories = Category.objects.all()
        steps = Step.objects.all()
        recipe = Recipe.objects.create(owner=self.Ivan, title='жабаговно', description='ахуенный хафчик',
                              poster='poster_url', prep_time=40, cook_time=20)
        Step.objects.create(title='берем укропу', image='step_poster', description='ыыы', recipe=recipe)
        Step.objects.create(title='потом кошачью жопу', image='step_poster', description='йцукен', recipe=recipe)

    def test_get_recipes_list(self):
        response = client.get(reverse('recipes:recipes_list'))
        recipes_list = Recipe.objects.all()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = RecipeSerializer(recipes_list, many=True)
        self.assertEqual(response.data['results'], serializer.data)


class SingleRecipe(TestCase):
    def setUp(self):
        pass

    def test_create_single_recipe(self):
        pass

    def test_get_single_recipe(self):
        pass

    def test_update_single_recipe(self):
        pass

    def test_delete_single_recipe(self):
        pass

    def test_get_nonex_single_recipe(self):
        pass

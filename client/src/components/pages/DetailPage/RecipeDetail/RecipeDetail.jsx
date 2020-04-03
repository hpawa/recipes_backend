import React from 'react';

import StarScore from '../../../widgets/star-score';
import RecipeMeta from '../../../widgets/recipe-meta';
import RecipeAction from '../../../widgets/recipe-action';
import RecipeFeature from '../../../widgets/recipe-feature';
import RecipeIngredients from '../../../widgets/recipe-ingredients';
import RecipeSteps from '../../../widgets/recipe-steps';

import './RecipeDetail.css';

const RecipeDetail = () => {
  return (
    <div class="single-recipe-layout2">
      <div class="ctg-name">PASTA</div>
      <h2 class="item-title">Chanterelle and Porcini Mushroom Recipes</h2>
      <div class="d-flex align-items-center justify-content-between flex-wrap mb-5">
        <StarScore score={3}/>
        <RecipeMeta owner="Petr LOL" likes={52} cooktime={50}/>
        <RecipeAction/>
      </div>
      <RecipeFeature preptime={12} cooktime={24} serving={5} views={1245}/>
      <p class="item-description">More off this less hello salamander lied porpoise much over tightly
                        circa horse taped so innocuously side crudey mightily rigorous plot life. New homes in
                        particular are subject.All recipes created with FoodiePress have suport for Micoformats and
                        Google Recipe View. Schema.org is a collaboration byo improve the web by creatinegaera
                        structured data markup.More off this less hello salamander lied porpoise much over tightly
                        circa horse tapedey innocuously.
      </p>
      <RecipeIngredients/>
      <RecipeSteps/>
    </div>
  )
}

export default RecipeDetail

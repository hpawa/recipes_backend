import React, { Component } from 'react'
import Carousel from './carousel/Carousel'
import RecipeMenu from './recipeMenu/RecipeMenu'

let dummyData = {
  "title": "Krasnaya Ribka",
  "category": "Ribka",
  "owner": "Petr Alabarv",
  "date": "Nov 14, 2018",
  "score": 2,
  "qtyLikes": 213,
  "prepTime": 100,
  "cookTime": 23,
  "serving": 2,
  "views": 1241,
  "images": [
    "img/figure/single-banner1.jpg",
    "img/figure/single-banner2.jpg",
    "img/figure/single-banner3.jpg",
    "img/figure/single-banner4.jpg",
    "img/figure/single-banner5.jpg",
  ],
  "ingredients": [
    "riba",
    "i",
    "vse",
    "bolshe",
    "nichego"
  ]
}

export class RecipeDetails extends Component {
  render() {
    return (
      <div>
        <Carousel images={dummyData.images}/>
        <RecipeMenu info={dummyData}/>
      </div>
    )
  }
}

export default RecipeDetails

import React, { Component } from 'react'
import RatingStars from '../../Widgets/Recipes/RatingStars'
import MetaRecipe from '../../Widgets/Recipes/MetaRecipe'

export class TopRecipe extends Component {
  render() {
    return (
      <div class="col-12">
        <div class="product-box-layout1">
          <figure class="item-figure">
            <a href="single-recipe1.html">
              <img src="img/product/product4.jpg" alt="Product"/>
            </a>
          </figure>
          <div class="item-content">
            <span class="sub-title">PASTA</span>
            <h2 class="item-title"><a href="single-recipe1.html">Chanterelle and Porcini
                    Mushroom Recipes</a></h2>
            <RatingStars score="1"/>
            <p>More off this less hello salamander lied porpoise much over tightly circa
                horse taped so innocuously side crud mightily rigorous plot life. New homes
                in particular are subject.</p>
            <MetaRecipe owner="John" mins="27" likes="21"/>
          </div>
        </div>
      </div>
    )
  }
}

export default TopRecipe

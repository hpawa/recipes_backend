import React, { Component } from 'react'

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
            <ul class="item-rating">
                <li class="star-fill"><i class="fas fa-star"></i></li>
                <li class="star-fill"><i class="fas fa-star"></i></li>
                <li class="star-fill"><i class="fas fa-star"></i></li>
                <li class="star-fill"><i class="fas fa-star"></i></li>
                <li class="star-empty"><i class="fas fa-star"></i></li>
                <li><span>9<span> / 10</span></span> </li>
            </ul>
            <p>More off this less hello salamander lied porpoise much over tightly circa
                horse taped so innocuously side crud mightily rigorous plot life. New homes
                in particular are subject.</p>
            <ul class="entry-meta">
                <li><a href="#"><i class="fas fa-clock"></i>15 Mins</a></li>
                <li><a href="#"><i class="fas fa-user"></i>by <span>John Martin</span></a></li>
                <li><a href="#"><i class="fas fa-heart"></i><span>02</span> Likes</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TopRecipe

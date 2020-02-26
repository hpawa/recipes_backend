import React, { Component } from 'react'
import IngredientItem from './IngredientItem'

export class Ingredients extends Component {
  render() {

    const ingredients = this.props.ingredients.map( item => <IngredientItem name={item}/> );

    return (
      <div class="col-xl-6 col-12">
        <div class="ingridients-wrap">
          <h3 class="item-title"><i class="fas fa-list-ul"></i>Ingridients</h3>
          {ingredients}
        </div>
      </div>
    )
  }
}

export default Ingredients

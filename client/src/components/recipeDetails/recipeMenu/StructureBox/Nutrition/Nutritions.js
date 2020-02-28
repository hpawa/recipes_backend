import React, { Component } from 'react'
import NutritionItem from './NutritionItem'

export class Nutritions extends Component {
  render() {

    const nutritions = this.props.nutritions.map( item => <NutritionItem info={item}/> )

    return (
      <div class="col-xl-6 col-12">
        <div class="nutrition-wrap">
          <h3 class="item-title"><i class="fas fa-info"></i>Nutrition</h3>
          <ul class="nutrition-list">
            {nutritions}
          </ul>
        </div>
      </div>
    )
  }
}

export default Nutritions

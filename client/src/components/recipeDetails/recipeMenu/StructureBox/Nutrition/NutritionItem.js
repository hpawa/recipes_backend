import React, { Component } from 'react'

export class NutritionItem extends Component {
  render() {

    const {name, value} = this.props.info;

    return (
      <li>
        <div class="nutrition-name">{name}</div>
        <div class="nutrition-value">{value}</div>
      </li>
    )
  }
}

export default NutritionItem

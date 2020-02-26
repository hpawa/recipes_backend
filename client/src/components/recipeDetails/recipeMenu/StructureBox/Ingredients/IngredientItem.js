import React, { Component } from 'react'

export class IngredientItem extends Component {
  render() {
    return (
      <div class="checkbox checkbox-primary">
        <input id="checkbox1" type="checkbox"/>
        <label for="checkbox1">{this.props.name}</label>
      </div>
    )
  }
}

export default IngredientItem

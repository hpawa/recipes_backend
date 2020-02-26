import React, { Component } from 'react'
import Ingredients from './Ingredients/Ingredients'

export class StructureBox extends Component {
  render() {
    return (
      <div class="making-elements-wrap">
        <div class="row">
          <Ingredients ingredients={this.props.info.ingredients}/>
        </div>
      </div>
    )
  }
}

export default StructureBox

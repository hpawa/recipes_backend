import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo/RecipeInfo'
import StructureBox from './StructureBox/StructureBox'

export class RecipeMenu extends Component {
  render() {
    return (
      <section class="single-recipe-wrap-layout2 padding-bottom-80">
        <div class="container">
          <div class="single-recipe-layout2">
            <RecipeInfo info={this.props.info}/>
            <StructureBox info={this.props.info}/>  
          </div>
        </div>
      </section>
    )
  }
}

export default RecipeMenu

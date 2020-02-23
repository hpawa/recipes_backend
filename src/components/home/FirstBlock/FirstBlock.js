import React, { Component } from 'react'
import TrendingRecipesBox from './Trending recipes/TrendingRecipesBox'

export class FirstBlock extends Component {
  render() {
    return (
      <section class="padding-bottom-45">
        <div class="container">
          <div class="row gutters-60">
          <TrendingRecipesBox/>
        </div>
        </div>
      </section>
    )
  }
}

export default FirstBlock

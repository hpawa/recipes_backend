import React from 'react';

import SliderDetail from '../../slider-detail';
import RecipeDetail from './RecipeDetail';

const DetailPage = ({match}) => {
  console.log(match.params.id)

  return (
    <React.Fragment>
      <SliderDetail/>
      <section class="single-recipe-wrap-layout2 padding-bottom-80">
        <div class="container">
          <RecipeDetail/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default DetailPage

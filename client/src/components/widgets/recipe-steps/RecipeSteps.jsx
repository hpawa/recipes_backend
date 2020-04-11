import React from 'react';

import './RecipeSteps.css';

const RecipeSteps = ({steps = []}) => {

	const renderData = steps.map( (item) => {
		return <div class="direction-box-layout2">
							<div class="serial-number">
								<h4 class="number-title">{item.order}</h4><span>Step</span>
							</div>
							<div class="item-content">
								<span class="item-time"><i class="far fa-clock"></i>{item.time} Mins</span>
								<p>{item.description}</p>
							</div>
						</div>
					
	})

  return (
    <div class="direction-wrap-layout2">
      <div class="section-heading2 heading-dark">
        <h2 class="item-heading">Follow The Directions</h2>
      </div>
      {renderData}
    </div>
  )
}

export default RecipeSteps

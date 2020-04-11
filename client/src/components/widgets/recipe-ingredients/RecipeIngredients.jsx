import React from 'react';

import './RecipeIngredients.css';

const RecipeIngredients = ({ingredients = []}) => {

  const renderData = ingredients.map( (item, idx) => {
    return <div key={item.id} class="checkbox checkbox-primary">
              <input id={`checkbox${idx}`} type="checkbox"/>
              <label for={`checkbox${idx}`}>{item.name}</label>
            </div>
  })

  return (
    <div class="making-elements-wrap">
      <div class="row">
        <div class="col-xl-6 col-12">
          <div class="ingridients-wrap">
              <h3 class="item-title"><i class="fas fa-list-ul"></i>Ingridients</h3>
              {renderData}
            </div>
          </div>
        </div>
      </div> 
  )
}

export default RecipeIngredients

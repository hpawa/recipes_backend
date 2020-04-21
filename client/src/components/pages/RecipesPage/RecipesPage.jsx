import React from 'react'

import Recipes from '../../recipes';
import Sidebar from '../../layout/sidebar';
import FollowUs from '../../widgets/follow-us';
import TopCategories from '../../widgets/top-categories';
import LatestRecipes from '../../widgets/latest-recipes';

const RecipesPage = () => {

  return (
    <div className="container">
      <div className="row gutters-60">
        <Recipes/>
        <Sidebar style={{marginTop:100}}>
          <FollowUs/>
          <TopCategories/>
          <LatestRecipes/>
        </Sidebar>
      </div>
    </div>
  )
}

export default RecipesPage

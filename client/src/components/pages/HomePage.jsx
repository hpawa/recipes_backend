import React from 'react';

import TrendingRecipes from './../trending-recipes';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row gutters-60">
        <TrendingRecipes/>
      </div>
    </div>
  )
}

export default HomePage

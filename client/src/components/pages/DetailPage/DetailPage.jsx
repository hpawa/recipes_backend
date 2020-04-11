import React from 'react';

import RecipeDetail from './RecipeDetail';

const DetailPage = ({match}) => {
  console.log(match.params.id)

  return (
    <RecipeDetail/>
  )
}

export default DetailPage

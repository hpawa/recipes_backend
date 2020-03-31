import React from 'react';

import TrendingRecipes from './../trending-recipes';
import Slider from '../slider';

const HomePage = () => {
  return (
    <div className="container">
       <Slider>
        <div>
          <img src="https://cdn.lifehacker.ru/wp-content/uploads/2019/05/Depositphotos_68972477_xl-2015_1559126153-e1559129205144-630x315.jpg" alt=""/>
        </div>
        <div>
          <img src="https://static.1000.menu/img/content/6685/gus-v-duhovke-s-yablokami_1498545352_9_max.jpg" alt=""/>
        </div>
      </Slider>
      <div className="row gutters-60">
        <TrendingRecipes/>
      </div>
    </div>
  )
}

export default HomePage

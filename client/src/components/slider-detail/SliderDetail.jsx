import React from 'react';

import Slider from '../slider';

import './SliderDetail.css';

const data = [
  "https://lh3.googleusercontent.com/proxy/V-EgM19QoA94_YyxE1fKmKVKlJfhfyc2zTHAyc3Zsa3bFDOh5ZLomV2JyoolOm1p1woURceE_Jw1KkjIotttlNo5qX6-mthbLumkeA7YLAjPXCEmq5GGcrboB_SAKjjaRWol8iXEtZD6UTFbwlWdT2OSzBcOOzYoozg",
  "https://www.learnathome.ru/files/media/food.jpg",
  "https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/104/350/image/base_6805e2ce98.jpg"
]

const SliderItem = ({url}) => {
  return (
    <div className="ranna-slider-content-detail">
      <figure className="item-figure">
        <img src={url} alt="Banner"/>
      </figure>
    </div>
  )
}

const SliderDetail = () => {

  const renderData = data.map( (item) => <SliderItem url={item}/>);

  return (
    <Slider>
      {renderData}
    </Slider>
  )
}

export default SliderDetail

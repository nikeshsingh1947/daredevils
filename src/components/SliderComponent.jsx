// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
import { Box ,Text} from '@chakra-ui/react';
import Type from './Type';
import FloatingDiv from './FloatingDiv';
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <div className="slider-container">
     
      <Slider {...settings}> 
        <div className="slide"  >
          <img src="https://images.unsplash.com/photo-1524785281156-c3c68d1e03c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Slide 1" />
          <div className="caption"></div>
          
        </div>
        <div className="slide" >
          <img src="https://images.unsplash.com/photo-1529801231037-d67f3dce5d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="Slide 2" />
          <div className="caption"></div>
         
        </div>
        <div className="slide" >
          <img src="https://plus.unsplash.com/premium_photo-1672256943920-9df2f090f8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="Slide 3" />
          <div className="caption">iiiiiiiii</div>
          
        </div>
      </Slider>
      <FloatingDiv/>
    </div>
  );
};

export default SliderComponent;

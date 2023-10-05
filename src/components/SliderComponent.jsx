// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
import { Box ,Text} from '@chakra-ui/react';
import Type from './Type';
import FloatingDiv from './FloatingDiv';
import SLideImage1 from "./Assets/DSC_0076.jpg"
import SLideImage2 from "./Assets/DSC_0001.jpg"
import SLideImage3 from "./Assets/DSC_0107.jpg"
import SLideImage4 from "./Assets/DSC_0192.jpg"
import SLideImage5 from "./Assets/DSC_9931.jpg"
import SLideImage6 from "./Assets/DSC_0889.jpg"
import SLideImage7 from "./Assets/DSC_0912.jpg"
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
          <img src={SLideImage3} alt="Slide 1" />
          <div className="caption"></div>
          
        </div>
        <div className="slide" >
          <img  src={SLideImage2} alt="Slide 2" />
          <div className="caption"></div>
         
        </div>
        <div className="slide" >
          <img src={SLideImage4} alt="Slide 3" />
          <div className="caption"></div>
          
        </div>
        <div className="slide" >
          <img src={SLideImage5} alt="Slide 3" />
          <div className="caption">iiiiiiiii</div>
          
        </div>
        <div className="slide" >
          <img src={SLideImage6} alt="Slide 3" />
          <div className="caption">iiiiiiiii</div>
          
        </div>
        <div className="slide" >
    <img src={SLideImage7} alt="Slide 3" />
          <div className="caption">iiiiiiiii</div>
          
        </div>
      </Slider>
      <FloatingDiv/>
    </div>
  );
};

export default SliderComponent;

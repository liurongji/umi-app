import React from 'react';
import Slider, {    Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img alt="" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img alt="" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img alt="" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img alt="" src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from '../carousel/carousel.component';
import { carouselData } from '../carousel/carouseldata';

const Slider = () => {
  const carousel = carouselData.map((item) => (
    <CarouselComponent url={item.image} description={item.description} />
  ));
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        {carousel}
      </Carousel>
    </div>
  );
};

export default Slider;

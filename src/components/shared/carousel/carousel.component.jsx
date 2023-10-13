import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slideimglogo from '../../../assets/carousel_assets/MINS-logo.png';
import slideimg from '../../../assets/carousel_assets/slideimg.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import '../carousel/carousel.css';

export default function CarouselComponent(props) {
  return (
    <div class="carousel-wrapper">
      <div class="card">
        <div>
          <img src={slideimglogo} alt="" class="carousel-logo" />
        </div>

        <div>
          <p class="carousel-description">{props.description}</p>
        </div>

        <div>
          <button class="carousel-button">
            Shop Now <MdOutlineKeyboardArrowRight class="button-arrow" />
          </button>
        </div>

        <div>
          <img class="carousel-image" src={props.url} alt="" />
        </div>

        <div>
          <img src={slideimg} alt="" class="carousel-right-side-image" />
        </div>
      </div>
    </div>
  );
}

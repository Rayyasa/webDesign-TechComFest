// components/Swiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SwiperComponent = ({ images }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    spaceBetween: 30,
  };

  return (
    <div className="swiper-container">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={`Slide ${index + 1}`} className="object-cover block h-96 w-full" />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;


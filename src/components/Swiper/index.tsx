import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { SliderContainer } from './styles';
import 'swiper/css';

export default function Carousel({ listImages, className }: any) {
  return (
    <SliderContainer className={className}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {(listImages || []).map((item: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <img
                alt={`img-${index}`}
                src={item}
                key={`sliderContent-${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderContainer>
  );
}

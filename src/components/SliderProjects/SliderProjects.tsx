import React, { useEffect, useState } from 'react';
import './SliderProjects.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

type Props = {
  pictures: string[];
  fade?: boolean
}

export const SliderProjects: React.FC<Props> = ({ pictures, fade }) => {
  const [getSwiper, setGetSwiper] = useState<any>();

  useEffect(() => {
    const timerId = window.setInterval(() => {
      getSwiper.slideNext();
    }, 4000);

    return () => {
      window.clearInterval(timerId);
    }
  }, [getSwiper]);

  return (
    <Swiper
      effect={fade ? "fade" : "coverflow"}
      modules={[Navigation, Pagination, EffectFade]}
      speed={1500}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      parallax={true}
      className="swiper-projects"

      onSwiper={(swiper: any) => setGetSwiper(swiper)}
    >
      {pictures.map((pictureLink, index) => (
        <SwiperSlide key={index} className="swiper-projects__slide">
          <img 
            className="swiper-projects__image"
            src={pictureLink} 
            alt="slider item" 
          />
       </SwiperSlide>
      ))}
    </Swiper>
  )
}
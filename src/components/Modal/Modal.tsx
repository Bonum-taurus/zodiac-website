import React, { useState } from 'react';
import './Modal.scss';

import { useSearchParams } from 'react-router-dom';

import { images } from '../../resource/images'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { ButtonsSlider } from '../ButtonsSlider';

type Props = {
  onOpenModal: (open: boolean) => void,
}

export const Modal: React.FC<Props> = ({ onOpenModal }) => {
  const [blockPrev, setBlockPrev] = useState<boolean>(true)
  const [blockNext, setBlockNext] = useState<boolean>(true)

  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    onOpenModal(false)

    const params = new URLSearchParams(searchParams);
    params.delete('modal');
    setSearchParams(params);
  }

  return (
    <div className="modal">
      <Swiper
        className="modal__swiper"
        onReachEnd={() => setBlockNext(false)}
        onReachBeginning={() => setBlockPrev(true)}
      >
        {images.map((linkPhoto, index) => (
          <SwiperSlide key={index} className="modal__swiper-slide">
            <img 
              src={linkPhoto} 
              alt="slider" 
              className="modal__swiper-image"/>
          </SwiperSlide>
        ))}

        <ButtonsSlider 
          blockPrev={blockPrev} 
          setBlockPrev={setBlockPrev} 
          blockNext={blockNext}
          setBlockNext={setBlockNext}
        />
      </Swiper>

      <button
        className="modal__back"
        onClick={() => handleClick()}
      />
    </div>
  )
}
import { useSwiper } from 'swiper/react';
import './ButtonsSlider.scss';
import React from 'react';

type Props = {
  blockPrev: boolean;
  setBlockPrev: (value: boolean) => void;
  blockNext: boolean;
  setBlockNext: (value: boolean) => void;
}

export const ButtonsSlider: React.FC<Props> = ({ 
  blockPrev, 
  setBlockPrev,
  blockNext, 
  setBlockNext,
}) => {
  const swiper = useSwiper();

  return (
    <div className="modal__navigation navigation">
      <button 
        style={{ display: blockPrev ? 'none' : 'block' }}
        className="navigation__prev" 
        onClick={() => {
          setBlockNext(true)
          swiper.slidePrev();
        }}
      />

      <button 
        style={{ display: blockNext ? 'block' : 'none' }}
        className="navigation__next"
        onClick={() => {
          setBlockPrev(false);
          swiper.slideNext()
        }} 
      />
    </div>
  )
}
import React from 'react';
import './ItemCart.scss';

import { useSearchParams } from 'react-router-dom';

type Props = {
  link: string,
  onOpenModal: (open: boolean) => void,
}

export const ItemCart: React.FC<Props> = ({ link, onOpenModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    onOpenModal(true)

    const params = new URLSearchParams(searchParams);
    params.set('modal', 'slider');
    setSearchParams(params);
  }

  return (
    <div className="cart">
      <img 
        src={link} 
        alt="car of project" 
        className="cart__image"
        onClick={() => handleClick()}
      />
    </div>
  )
}
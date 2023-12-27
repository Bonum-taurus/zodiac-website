import { ItemCart } from '../../components/ItemCart';
import './Gallery.scss';

import { images } from '../../resource/images'
import { useState } from 'react';
import { Modal } from '../../components/Modal';

export const Gallery = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      {openModal ? (
         <Modal onOpenModal={setOpenModal} />
      ) : (
        <div className="gallery">
          <div className="gallery__top">
            <h1 className="gallery__title">
              Gallery
            </h1>

            <h2 className="gallery__subtitle">
              See what our team has been working on!
            </h2>
          </div>

          <div className="gallery__content">
            <h2 className="gallery__content-title">
              Project Gallery
            </h2>

            <div className="gallery__content-box">
              {images.map(linkPhoto => (
                <ItemCart 
                  key={linkPhoto} 
                  link={linkPhoto} 
                  onOpenModal={setOpenModal} />
              ))}
            </div>
          </div>
        </div>
       )}
    </>
  )
}
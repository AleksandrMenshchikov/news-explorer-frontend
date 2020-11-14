import React from 'react'
import './NotFoundResult.css'
import img from '../../images/not-found_v1.png'

const NotFoundResult = () => {
  return (
    <div className="NotFoundResult">
      <img
        alt="Изображение печального эмоджи"
        src={img}
        className="NotFoundResult__image"
      />
      <p className="NotFoundResult__title">Ничего не найдено</p>
      <p className="NotFoundResult__subtitle">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </div>
  );
}

export default NotFoundResult

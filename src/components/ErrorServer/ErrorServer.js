import React from 'react'
import './ErrorServer.css'

const ErrorServer = () => {
  return (
    <section className="ErrorServer">
      <div className="ErrorServer__container">
        <p className="ErrorServer__title">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      </div>
    </section>
  );
}

export default ErrorServer

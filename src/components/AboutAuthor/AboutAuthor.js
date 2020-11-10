import React from "react";
import "./AboutAuthor.css";
import foto from "../../images/IMG_5491.JPEG";

const AboutAuthor = () => {
  return (
    <section className="AboutAuthor">
      <div className="AboutAuthor__container">
        <img alt="Фотография автора" src={foto} className="AboutAuthor__img" />
        <article className="AboutAuthor__content">
          <h2 className="AboutAuthor__title">Об авторе</h2>
          <p className="AboutAuthor__subtitle">
            Меньщиков Александр Петрович &ndash; Веб-разработчик.
            <br />
            <br />
            Создаю Веб-приложения с применением технологий: HTML5, CSS3,
            JavaScript, React, Git, Node.js, Express.js, Mongoose, MongoDB
            <br />
            <br />
            Проходил обучение в Яндекс.Практикуме. За время обучения освоил востребованные навыки
            веб-разработчика.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutAuthor;

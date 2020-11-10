import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ isLoggedIn }) => {
  return (
    <section className="NewsCardList">
      <div className="NewsCardList__container">
        <h4 className="NewsCardList__title">Результаты поиска</h4>
        <ul className="NewsCardList__list">
          <li className="NewsCardList__list-item">
            <NewsCard isLoggedIn={isLoggedIn} />
          </li>
          <li className="NewsCardList__list-item">
            <NewsCard isLoggedIn={isLoggedIn} />
          </li>
          <li className="NewsCardList__list-item">
            <NewsCard isLoggedIn={isLoggedIn} />
          </li>
        </ul>
        <button type="button" className="NewsCardList__button">
          Показать еще
        </button>
      </div>
    </section>
  );
};

export default NewsCardList;
import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { v4 as uuidv4 } from "uuid";

import "./NewsCardList.css";

const NewsCardList = ({
  isLoggedIn,
  isSavedNewsPath,
  articles,
  onSetIsPopupOpened,
  onSetIsFormLoginActive,
  onSetArticles,
}) => {
  const [slicer, setSlicer] = useState(3);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    if (slicer >= articles.length) {
      setIsStop(true);
    } else {
      setIsStop(false);
    }
  }, [slicer, articles]);

  return (
    <section className="NewsCardList">
      <div className="NewsCardList__container">
        <h4 className="NewsCardList__title">Результаты поиска</h4>
        <ul className="NewsCardList__list">
          {articles.slice(0, slicer).map((article) => (
            <li key={uuidv4()} className="NewsCardList__list-item">
              <NewsCard
                isLoggedIn={isLoggedIn}
                isSavedNewsPath={isSavedNewsPath}
                article={article}
                onSetIsPopupOpened={onSetIsPopupOpened}
                onSetIsFormLoginActive={onSetIsFormLoginActive}
                articles={articles}
                onSetArticles={onSetArticles}
              />
            </li>
          ))}
        </ul>
        {isStop ? null : (
          <button
            onClick={() => {
              onSetArticles(JSON.parse(localStorage.getItem("articles")));
              setSlicer(slicer + 3);
            }}
            type="button"
            className="NewsCardList__button"
          >
            Показать еще
          </button>
        )}
      </div>
    </section>
  );
};

export default NewsCardList;

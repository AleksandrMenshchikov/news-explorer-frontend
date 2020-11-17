import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedCards.css";
import { v4 as uuidv4 } from "uuid";

const SavedCards = ({
  isLoggedIn,
  isSavedNewsPath,
  articlesForSavedNews,
  onSetDeletedCard,
}) => {
  return (
    <section className="SavedCards">
      <div className="SavedCards__container">
        <ul className="SavedCards__list">
          {articlesForSavedNews &&
            articlesForSavedNews.sortedArticlesById.map((article) => (
              <li key={uuidv4()} className="SavedCards__list-item">
                <NewsCard
                  isLoggedIn={isLoggedIn}
                  isSavedNewsPath={isSavedNewsPath}
                  article={article}
                  onSetDeletedCard={onSetDeletedCard}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SavedCards;

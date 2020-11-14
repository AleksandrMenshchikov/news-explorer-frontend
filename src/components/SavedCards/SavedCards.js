import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedCards.css";

const SavedCards = ({ isLoggedIn, isSavedNewsPath }) => {
  return (
    <section className="SavedCards">
      <div className="SavedCards__container">
        <ul className="SavedCards__list">
          <li className="SavedCards__list-item">
            <NewsCard
              isLoggedIn={isLoggedIn}
              isSavedNewsPath={isSavedNewsPath}
            />
          </li>
          <li className="SavedCards__list-item">
            <NewsCard
              isLoggedIn={isLoggedIn}
              isSavedNewsPath={isSavedNewsPath}
            />
          </li>
          <li className="SavedCards__list-item">
            <NewsCard
              isLoggedIn={isLoggedIn}
              isSavedNewsPath={isSavedNewsPath}
            />
          </li>
          <li className="SavedCards__list-item">
            <NewsCard
              isLoggedIn={isLoggedIn}
              isSavedNewsPath={isSavedNewsPath}
            />
          </li>
          <li className="SavedCards__list-item">
            <NewsCard
              isLoggedIn={isLoggedIn}
              isSavedNewsPath={isSavedNewsPath}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SavedCards;

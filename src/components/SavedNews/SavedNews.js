import React from "react";
import SavedCards from "../SavedCards/SavedCards";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

const SavedNews = ({
  isLoggedIn,
  isSavedNewsPath,
  articlesForSavedNews,
  onSetDeletedCard,
}) => {
  return (
    <>
      <SavedNewsHeader articlesForSavedNews={articlesForSavedNews} />
      <SavedCards
        isLoggedIn={isLoggedIn}
        isSavedNewsPath={isSavedNewsPath}
        articlesForSavedNews={articlesForSavedNews}
        onSetDeletedCard={onSetDeletedCard}
      />
    </>
  );
};

export default SavedNews;

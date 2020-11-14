import React from "react";
import SavedCards from "../SavedCards/SavedCards";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

const SavedNews = ({ isLoggedIn, isSavedNewsPath }) => {
  return (
    <>
      <SavedNewsHeader />
      <SavedCards isLoggedIn={isLoggedIn} isSavedNewsPath={isSavedNewsPath} />
    </>
  );
};

export default SavedNews;

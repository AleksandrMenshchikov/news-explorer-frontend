import React from "react";
import { Route } from "react-router-dom";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import NewsCardList from "../NewsCardList/NewsCardList";
import NotFoundResult from "../NotFoundResult/NotFoundResult";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import "./Main.css";

const Main = ({
  isLoggedIn,
  onSetLoggedInFalse,
  isResult,
  isLoading,
  isNotFoundResult,
  isSavedNewsPath,
  onSetSavedNewsPathBoolean,
  onSetPopupOpened,
}) => {
  return (
    <div className="Main">
      <Search
        isLoggedIn={isLoggedIn}
        onSetLoggedInFalse={onSetLoggedInFalse}
        isSavedNewsPath={isSavedNewsPath}
        onSetSavedNewsPathBoolean={onSetSavedNewsPathBoolean}
        onSetPopupOpened={onSetPopupOpened}
      />
      <Route path="/" exact>
        {isLoading && <Preloader />}
        {isNotFoundResult && <NotFoundResult />}
        {isResult && (
          <NewsCardList
            isLoggedIn={isLoggedIn}
            isSavedNewsPath={isSavedNewsPath}
          />
        )}
        <AboutAuthor />
      </Route>
    </div>
  );
};

export default Main;

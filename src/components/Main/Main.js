import React from "react";
import { Route } from "react-router-dom";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import ErrorServer from "../ErrorServer/ErrorServer";
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
  onSetIsPopupOpened,
  onSetIsLoading,
  onSetIsResult,
  onSetIsNotFoundResult,
  isErrorServer,
  setIsErrorServer,
  onSetArticles,
  articles,
  onSetIsFormRegisterActive,
  onSetIsFormLoginActive,
  onSetIsSignupConfirmationActive,
  isNavigationActive,
}) => {
  return (
    <div className="Main">
      <Search
        isLoggedIn={isLoggedIn}
        onSetLoggedInFalse={onSetLoggedInFalse}
        isSavedNewsPath={isSavedNewsPath}
        onSetSavedNewsPathBoolean={onSetSavedNewsPathBoolean}
        onSetIsPopupOpened={onSetIsPopupOpened}
        onSetIsLoading={onSetIsLoading}
        onSetIsResult={onSetIsResult}
        onSetIsNotFoundResult={onSetIsNotFoundResult}
        setIsErrorServer={setIsErrorServer}
        onSetArticles={onSetArticles}
        onSetIsFormRegisterActive={onSetIsFormRegisterActive}
        onSetIsFormLoginActive={onSetIsFormLoginActive}
        onSetIsSignupConfirmationActive={onSetIsSignupConfirmationActive}
        isNavigationActive={isNavigationActive}
      />
      <Route path="/" exact>
        {isLoading && <Preloader />}
        {isNotFoundResult && <NotFoundResult />}
        {isErrorServer && <ErrorServer />}
        {isResult && (
          <NewsCardList
            isLoggedIn={isLoggedIn}
            isSavedNewsPath={isSavedNewsPath}
            articles={articles}
            onSetIsPopupOpened={onSetIsPopupOpened}
            onSetIsFormLoginActive={onSetIsFormLoginActive}
          />
        )}
        <AboutAuthor />
      </Route>
    </div>
  );
};

export default Main;

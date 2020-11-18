import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Search.css";

const Search = ({
  isLoggedIn,
  onSetLoggedInFalse,
  isSavedNewsPath,
  onSetSavedNewsPathBoolean,
  onSetIsPopupOpened,
  onSetIsLoading,
  onSetIsResult,
  onSetIsNotFoundResult,
  setIsErrorServer,
  onSetArticles,
  onSetIsFormRegisterActive,
  onSetIsFormLoginActive,
  onSetIsSignupConfirmationActive,
  isNavigationActive,
}) => {
  const [isActiveButtonBurger, setIsActiveButtonBurger] = useState(false);

  function handleClickButtonBurger() {
    setIsActiveButtonBurger(!isActiveButtonBurger);
  }

  return (
    <div className="Search">
      <Header
        isActiveButtonBurger={isActiveButtonBurger}
        onClickButtonBurger={handleClickButtonBurger}
        isLoggedIn={isLoggedIn}
        onSetLoggedInFalse={onSetLoggedInFalse}
        isSavedNewsPath={isSavedNewsPath}
        onSetSavedNewsPathBoolean={onSetSavedNewsPathBoolean}
        onSetIsPopupOpened={onSetIsPopupOpened}
        onSetIsFormRegisterActive={onSetIsFormRegisterActive}
        onSetIsFormLoginActive={onSetIsFormLoginActive}
        onSetIsSignupConfirmationActive={onSetIsSignupConfirmationActive}
        isNavigationActive={isNavigationActive}
        onSetIsResult={onSetIsResult}
      />
      <Route path="/" exact>
        <SearchForm
          isSavedNewsPath={isSavedNewsPath}
          onSetIsLoading={onSetIsLoading}
          onSetIsResult={onSetIsResult}
          onSetIsNotFoundResult={onSetIsNotFoundResult}
          setIsErrorServer={setIsErrorServer}
          onSetArticles={onSetArticles}
        />
      </Route>
    </div>
  );
};

export default Search;

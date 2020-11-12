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
  onSetPopupOpened,
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
        onSetPopupOpened={onSetPopupOpened}
      />
      <Route path="/" exact>
        <SearchForm isSavedNewsPath={isSavedNewsPath} />
      </Route>
    </div>
  );
};

export default Search;

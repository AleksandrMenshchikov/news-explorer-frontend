import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './Search.css';

const Search = ({ isLoggedIn, onSetLoggedInFalse }) => {
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
      />
      <SearchForm />
    </div>
  );
};

export default Search;

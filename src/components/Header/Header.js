import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({
  isActiveButtonBurger,
  onClickButtonBurger,
  isLoggedIn,
  onSetLoggedInFalse,
}) => (
  <header className={`Header ${isActiveButtonBurger && 'Header_theme_dark'}`}>
    <div className="Header__container">
      <Link to="/" className="Header__logo">
        NewsExplorer
      </Link>
      <Navigation
        isActiveButtonBurger={isActiveButtonBurger}
        isLoggedIn={isLoggedIn}
        onClickButtonBurger={onClickButtonBurger}
        onSetLoggedInFalse={onSetLoggedInFalse}
      />
      <Burger
        isActiveButtonBurger={isActiveButtonBurger}
        onClickButtonBurger={onClickButtonBurger}
      />
    </div>
  </header>
);

export default Header;

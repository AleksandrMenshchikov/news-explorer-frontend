import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import iconSignoutWhite from '../../images/logout-white.svg';

const Navigation = ({
  isActiveButtonBurger,
  isLoggedIn,
  onClickButtonBurger,
  onSetLoggedInFalse,
}) => {
  function handleNavLinkSignout() {
    if (isActiveButtonBurger) {
      onClickButtonBurger();
    }
    if (isLoggedIn) {
      onSetLoggedInFalse();
    }
  }

  return (
    <nav
      className={`Navigation ${isActiveButtonBurger && 'Navigation_active'}`}
    >
      <ul
        className={`Navigation__list ${
          isActiveButtonBurger && 'Navigation__list_active'
        } ${isLoggedIn && 'Navigation__list_loggedin'}`}
      >
        <li className="Navigation__item">
          <NavLink
            to="/"
            className="Navigation__link Navigation__link_underlined"
            activeClassName="Navigation__link_active"
            exact
          >
            Главная
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="Navigation__item">
            <NavLink
              to="/saved-news"
              className="Navigation__link Navigation__link_underlined"
              activeClassName="Navigation__link_active"
              exact
            >
              Сохранённые статьи
            </NavLink>
          </li>
        )}
        <li className="Navigation__item Navigation__item_auth">
          <NavLink
            to="/signin"
            className="Navigation__link Navigation__link_auth"
            onClick={handleNavLinkSignout}
          >
            {isLoggedIn ? 'User' : 'Авторизоваться'}
            {isLoggedIn && (
              <img
                alt=""
                src={iconSignoutWhite}
                className="Navigation__image-signout"
              />
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

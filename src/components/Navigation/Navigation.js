import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import iconSignoutWhite from "../../images/logout-white.svg";
import iconSignoutDark from "../../images/logout-dark.svg";

const Navigation = ({
  isActiveButtonBurger,
  isLoggedIn,
  onClickButtonBurger,
  onSetLoggedInFalse,
  onSetSavedNewsPathBoolean,
  isSavedNewsPath,
  onSetPopupOpened,
}) => {
  function handleNavLink() {
    if (isActiveButtonBurger) {
      onClickButtonBurger();
    }
    if (!isLoggedIn) {
      onSetPopupOpened();
    }
    onSetSavedNewsPathBoolean(false);
  }

  return (
    <nav
      className={`Navigation ${isActiveButtonBurger && "Navigation_active"} ${
        isActiveButtonBurger && isSavedNewsPath && "Navigation_active_white"
      }`}
    >
      <ul
        className={`Navigation__list ${
          isActiveButtonBurger && "Navigation__list_active"
        } ${isLoggedIn && "Navigation__list_loggedin"}`}
      >
        <li className="Navigation__item">
          <NavLink
            onClick={() => onSetSavedNewsPathBoolean(false)}
            to="/"
            className={`Navigation__link Navigation__link_underlined ${
              isSavedNewsPath && "Navigation__link_theme_dark"
            }`}
            activeClassName="Navigation__link_active"
            exact
          >
            Главная
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="Navigation__item">
            <NavLink
              onClick={() => onSetSavedNewsPathBoolean(true)}
              to="/saved-news"
              className={`Navigation__link Navigation__link_underlined ${
                isSavedNewsPath && "Navigation__link_theme_dark"
              }`}
              activeClassName={`Navigation__link_active ${
                isSavedNewsPath && "Navigation__link_active_theme_dark"
              }`}
              exact
            >
              Сохранённые статьи
            </NavLink>
          </li>
        )}
        <li className="Navigation__item Navigation__item_auth">
          <NavLink
            onClick={handleNavLink}
            to="/"
            className={`Navigation__link Navigation__link_auth ${
              isSavedNewsPath && "Navigation__link_auth_dark"
            }`}
          >
            {isLoggedIn ? "User" : "Авторизоваться"}
            {isLoggedIn && !isSavedNewsPath && (
              <img
                alt=""
                src={iconSignoutWhite}
                className="Navigation__image-signout"
              />
            )}
            {isLoggedIn && isSavedNewsPath && (
              <img
                alt=""
                src={iconSignoutDark}
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

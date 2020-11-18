import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navigation.css";
import iconSignoutWhite from "../../images/logout-white.svg";
import iconSignoutDark from "../../images/logout-dark.svg";
import * as auth from "../../utils/Auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Navigation = ({
  isActiveButtonBurger,
  isLoggedIn,
  onClickButtonBurger,
  onSetSavedNewsPathBoolean,
  isSavedNewsPath,
  onSetIsPopupOpened,
  onSetIsFormRegisterActive,
  onSetIsFormLoginActive,
  onSetIsSignupConfirmationActive,
  onSetLoggedInFalse,
  onSetIsResult,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  function createName(string) {
    if (string.length >= 20) {
      return `${string.slice(0, 19)}...`;
    } else {
      return string;
    }
  }

  function handleNavLink() {
    if (isActiveButtonBurger) {
      onClickButtonBurger();
    }
    if (!isLoggedIn) {
      onSetIsPopupOpened(true);
      onSetIsFormRegisterActive(false);
      onSetIsFormLoginActive(true);
      onSetIsSignupConfirmationActive(false);
    }
    onSetSavedNewsPathBoolean(false);
    if (isLoggedIn) {
      auth
        .signout()
        .then((res) => {
          onSetLoggedInFalse();
          history.push("/");
          localStorage.removeItem("articles");
          onSetIsResult(false);
        })
        .catch((err) => console.log(err));
    }
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
            onClick={() => {
              if (isActiveButtonBurger) {
                onClickButtonBurger();
              }
              onSetSavedNewsPathBoolean(false);
            }}
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
              onClick={() => {
                if (isActiveButtonBurger) {
                  onClickButtonBurger();
                }
                onSetSavedNewsPathBoolean(true);
              }}
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
          <div
            tabIndex={0}
            onClick={handleNavLink}
            className={`Navigation__link Navigation__link_auth ${
              isSavedNewsPath && "Navigation__link_auth_dark"
            }`}
          >
            {isLoggedIn ? `${createName(currentUser.name)}` : "Авторизоваться"}
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
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

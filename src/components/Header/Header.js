import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = ({
  isActiveButtonBurger,
  onClickButtonBurger,
  isLoggedIn,
  onSetLoggedInFalse,
  isSavedNewsPath,
  onSetSavedNewsPathBoolean,
  onSetPopupOpened,
}) => {
  return (
    <header
      className={`Header ${
        isActiveButtonBurger && !isSavedNewsPath && "Header_theme_dark"
      } ${
        (isSavedNewsPath && "Header_theme_white") ||
        (isActiveButtonBurger && isSavedNewsPath && "Header_theme_white")
      }`}
    >
      <div className="Header__container">
        <Link
          onClick={() => onSetSavedNewsPathBoolean(false)}
          to="/"
          className={`Header__logo ${
            isSavedNewsPath && "Header__logo_theme_dark"
          }`}
        >
          NewsExplorer
        </Link>
        <Navigation
          isActiveButtonBurger={isActiveButtonBurger}
          isLoggedIn={isLoggedIn}
          onClickButtonBurger={onClickButtonBurger}
          onSetLoggedInFalse={onSetLoggedInFalse}
          onSetSavedNewsPathBoolean={onSetSavedNewsPathBoolean}
          isSavedNewsPath={isSavedNewsPath}
          onSetPopupOpened={onSetPopupOpened}
        />
        <Burger
          isActiveButtonBurger={isActiveButtonBurger}
          onClickButtonBurger={onClickButtonBurger}
          isSavedNewsPath={isSavedNewsPath}
        />
      </div>
    </header>
  );
};

export default Header;

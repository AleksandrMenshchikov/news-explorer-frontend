import React from 'react';
import './Burger.css';

const Burger = ({
  isActiveButtonBurger,
  onClickButtonBurger,
  isSavedNewsPath,
}) => {
  function handleClickButtonBurger() {
    onClickButtonBurger();
  }

  return (
    <button
      onClick={handleClickButtonBurger}
      type="button"
      aria-label="Кнопка навигации"
      className={`Burger ${isActiveButtonBurger && "Burger_active"} ${
        isSavedNewsPath && "Burger_theme-dark"
      }`}
    >
      <div className="Burger__inner"></div>
    </button>
  );
};

export default Burger;

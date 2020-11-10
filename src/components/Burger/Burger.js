import React from 'react';
import './Burger.css';

const Burger = ({ isActiveButtonBurger, onClickButtonBurger }) => {
  function handleClickButtonBurger() {
    onClickButtonBurger();
  }

  return (
    <button
      onClick={handleClickButtonBurger}
      type="button"
      aria-label="Кнопка навигации"
      className={`Burger ${isActiveButtonBurger && 'Burger_active'}`}
    >
      <div className="Burger__inner"></div>
    </button>
  );
};

export default Burger;

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
    />
  );
};

export default Burger;

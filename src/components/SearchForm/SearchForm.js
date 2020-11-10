import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form className="SearchForm__form">
        <input
          type="text"
          className="SearchForm__input"
          placeholder="Введите тему новости"
        />
        <button type="submit" className="SearchForm__submit">
          Искать
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

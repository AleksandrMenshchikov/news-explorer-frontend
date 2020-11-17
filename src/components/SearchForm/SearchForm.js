import React, { useEffect, useRef, useState } from "react";
import "./SearchForm.css";
import getNews from "../../utils/NewsApi";

const SearchForm = ({
  onSetIsLoading,
  onSetIsResult,
  onSetIsNotFoundResult,
  setIsErrorServer,
  onSetArticles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    onSetIsLoading(true);
    onSetIsNotFoundResult(false);
    setIsErrorServer(false);
    getNews(inputValue, "ru", 7, 100)
      .then((res) => {
        if (res.status === "ok" && res.articles.length > 0) {
          const articles = res.articles;
          articles.map((item) => {
            item.keyword = inputValue;
            return item;
          });
          onSetArticles(articles);
          localStorage.setItem("articles", JSON.stringify(articles));
          onSetIsResult(true);
          onSetIsNotFoundResult(false);
        } else {
          onSetIsResult(false);
          onSetIsNotFoundResult(true);
        }
      })
      .catch((err) => {
        if (err) {
          setIsErrorServer(true);
          onSetIsResult(false);
        }
        console.log(err);
      })
      .finally(() => {
        setInputValue("");
        onSetIsLoading(false);
      });
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (inputValue.length < 1) {
      inputRef.current.setCustomValidity("Нужно ввести ключевое слово");
    } else {
      inputRef.current.setCustomValidity("");
    }
  }, [inputValue]);

  return (
    <section className="SearchForm">
      <h1 className="SearchForm__title">Что творится в мире?</h1>
      <p className="SearchForm__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form onSubmit={handleFormSubmit} className="SearchForm__form">
        <input
          ref={inputRef}
          onChange={handleInputChange}
          type="text"
          className="SearchForm__input"
          placeholder="Введите тему новости"
          required
          value={inputValue}
        />
        <button type="submit" className="SearchForm__submit">
          Искать
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

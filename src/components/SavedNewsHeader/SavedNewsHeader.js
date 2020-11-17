import React, { useContext, useEffect, useState } from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedNewsHeader = ({ articlesForSavedNews }) => {
  const currentUser = useContext(CurrentUserContext);
  const [keywords, setKeywords] = useState("");

  function correctWord(word) {
    return word.split("").map((item, index) => {
      return index === 0 ? item.toUpperCase() : item.toLowerCase();
    });
  }

  useEffect(() => {
    if (articlesForSavedNews) {
      const arr = Object.entries(articlesForSavedNews.keywords).sort((a, b) => {
        return b[1] - a[1];
      });
      setKeywords(arr);
    }
  }, [articlesForSavedNews]);

  return (
    <section className="SavedNewsHeader">
      <div className="SavedNewsHeader__container">
        <h4 className="SavedNewsHeader__title">Сохранённые статьи</h4>
        <p className="SavedNewsHeader__message">
          {currentUser.name}, у вас{" "}
          {articlesForSavedNews ? articlesForSavedNews.numberOfArticles : null}{" "}
          {articlesForSavedNews && articlesForSavedNews.numberOfArticles === 1
            ? "сохранённая статья"
            : "сохранённых статей"}
        </p>
        <p className="SavedNewsHeader__keywords">
          {keywords && keywords.length > 3 ? (
            <>
              По ключевым словам: <b>{correctWord(keywords[0][0])}, </b>
              <b>{correctWord(keywords[1][0])}, </b>и{" "}
              <b>{keywords.length - 2}-м другим</b>
            </>
          ) : null}
          {keywords && keywords.length === 3 ? (
            <>
              По ключевым словам: <b>{correctWord(keywords[0][0])}, </b>
              <b>{correctWord(keywords[1][0])}, </b>и{" "}
              <b>{correctWord(keywords[2][0])}</b>
            </>
          ) : null}
          {keywords && keywords.length === 2 ? (
            <>
              По ключевым словам: <b>{correctWord(keywords[0][0])} </b>и{" "}
              <b>{correctWord(keywords[1][0])}</b>
            </>
          ) : null}
          {keywords && keywords.length === 1 ? (
            <>
              По ключевым словам: <b>{correctWord(keywords[0][0])} </b>
            </>
          ) : null}
          {keywords && keywords.length === 0 ? <></> : null}
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;

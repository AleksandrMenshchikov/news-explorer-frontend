import React, { useRef, useState } from "react";
import "./NewsCard.css";
import fallback from "../../images/fallback.png";

const NewsCard = ({ isLoggedIn, isSavedNewsPath }) => {
  const [isMarked, setIsMarked] = useState(false);
  const tooltipRef = useRef();

  function handleButtonClick() {
    if (isLoggedIn && !isSavedNewsPath) {
      setIsMarked(!isMarked);
    } else if (!isLoggedIn) {
      tooltipRef.current.classList.add("NewsCard__tooltip_active");
    }
  }

  function handleButtonMouseOver() {
    if (!isLoggedIn) {
      tooltipRef.current.classList.add("NewsCard__tooltip_active");
    } else if (isLoggedIn && isSavedNewsPath) {
      tooltipRef.current.classList.add("NewsCard__tooltip_active");
    }
  }

  function handleButtonMouseLeave() {
    tooltipRef.current.classList.remove("NewsCard__tooltip_active");
  }

  return (
    <div className="NewsCard">
      <img
        className="NewsCard__image"
        src={fallback}
        alt="Изображение карточки"
      />
      <button
        onClick={handleButtonClick}
        onMouseOver={handleButtonMouseOver}
        onMouseLeave={handleButtonMouseLeave}
        type="button"
        className="NewsCard__mark-container"
      >
        {isSavedNewsPath ? (
          <svg
            className="NewsCard__mark"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="NewsCard__mark-inner_busket"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z"
              fill="#B6BCBF"
            />
          </svg>
        ) : (
          <svg
            className={`NewsCard__mark ${isMarked && "NewsCard__mark_marked"}`}
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="NewsCard__mark-inner"
              d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
              stroke="#B6BCBF"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
      <div ref={tooltipRef} className="NewsCard__tooltip">
        {isSavedNewsPath
          ? "Убрать из сохранённых"
          : "Войдите, чтобы сохранять статьи"}
      </div>
      {isSavedNewsPath && (
        <div className="NewsCard__keyword">
          <p className="NewsCard__keyword-text">
            метоксихлордиэтиламинометилбутиламиноакридин
          </p>
        </div>
      )}
      <article className="NewsCard__content">
        <p className="NewsCard__date">10 ноября, 2020</p>
        <h4 className="NewsCard__title">
          «Первозданная тайга»: новый фотопроект Игоря Шпиленка в новостной
          ленте
        </h4>
        <p className="NewsCard__subtitle">
          Знаменитый фотограф снимает первозданные леса России, чтобы рассказать
          о необходимости их сохранения. В этот раз он отправился в
          Двинско-Пинежскую тайгу, где он решил остановится на несколько дней.
        </p>
        <p className="NewsCard__source">Риа</p>
      </article>
    </div>
  );
};

export default NewsCard;

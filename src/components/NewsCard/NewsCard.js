import React, { useEffect, useRef, useState } from "react";
import "./NewsCard.css";
import fallback from "../../images/fallback.png";
import { api } from "../../utils/MainApi";

const NewsCard = ({
  isLoggedIn,
  isSavedNewsPath,
  article,
  onSetDeletedCard,
  onSetIsPopupOpened,
  onSetIsFormLoginActive,
}) => {
  const [isMarked, setIsMarked] = useState(false);
  const [articleId, setArticleId] = useState();

  const tooltipRef = useRef();

  function correctWord(word) {
    return word.split("").map((item, index) => {
      return index === 0 ? item.toUpperCase() : item.toLowerCase();
    });
  }

  useEffect(() => {
    if (article.marked) {
      setIsMarked(true);
      setArticleId(article._id);
    }
  }, [article]);

  function createDate(date) {
    const months = {
      1: "января",
      2: "февраля",
      3: "марта",
      4: "апреля",
      5: "мая",
      6: "июня",
      7: "июля",
      8: "августа",
      9: "сентября",
      10: "октября",
      11: "ноября",
      12: "декабря",
    };
    const arr = date.split("T")[0].split("-");
    const year = arr[0];
    const month = arr[1];
    const day = arr[2];

    return `${day} ${months[month]}, ${year}`;
  }

  function handleButtonClick() {
    if (isLoggedIn && !isSavedNewsPath) {
      if (!isMarked) {
        api
          .postArticle(
            article.keyword,
            article.title,
            article.description,
            article.publishedAt,
            article.source.name,
            article.url,
            article.urlToImage
          )
          .then((res) => {
            if (res._id) {
              setIsMarked(true);
              setArticleId(res._id);
              Promise.resolve(
                JSON.parse(localStorage.getItem("articles"))
              ).then((result) => {
                const arr = result.map((item) => {
                  if (item.description === res.text) {
                    item.marked = true;
                    item._id = res._id;
                  }
                  return item;
                });
                localStorage.setItem("articles", JSON.stringify(arr));
              });
            }
          })
          .catch((err) => console.log(err));
      }
      if (isMarked) {
        api
          .deleteArticle(articleId)
          .then((res) => {
            if (res._id) {
              setIsMarked(false);
              Promise.resolve(
                JSON.parse(localStorage.getItem("articles"))
              ).then((result) => {
                const arr = result.map((item) => {
                  if (item._id === res._id) {
                    item.marked = false;
                  }
                  return item;
                });
                localStorage.setItem("articles", JSON.stringify(arr));
              });
            }
          })
          .catch((err) => console.log(err));
      }
    } else if (!isLoggedIn) {
      tooltipRef.current.classList.add("NewsCard__tooltip_active");
    } else if (isLoggedIn && isSavedNewsPath) {
      api
        .deleteArticle(article._id)
        .then((res) => {
          if (res._id) {
            setIsMarked(false);
            Promise.resolve(JSON.parse(localStorage.getItem("articles")))
              .then((result) => {
                if (result) {
                  const arr = result.map((item) => {
                    if (item._id === res._id) {
                      item.marked = false;
                    }
                    return item;
                  });
                  localStorage.setItem("articles", JSON.stringify(arr));
                }
              })
              .finally(() => onSetDeletedCard(res));
          }
        })
        .catch((err) => console.log(err));
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
        src={article.urlToImage || article.image || fallback}
        alt="Изображение карточки"
      />
      <div
        onClick={handleButtonClick}
        onMouseOver={handleButtonMouseOver}
        onMouseLeave={handleButtonMouseLeave}
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
      </div>
      <div ref={tooltipRef} className="NewsCard__tooltip">
        {isSavedNewsPath
          ? "Убрать из сохранённых"
          : "Авторизуйтесь, чтобы сохранять статьи"}
      </div>
      {isSavedNewsPath && (
        <div className="NewsCard__keyword">
          <p className="NewsCard__keyword-text">
            {correctWord(article.keyword)}
          </p>
        </div>
      )}
      <article className="NewsCard__content">
        <p className="NewsCard__date">
          {createDate(article.publishedAt || article.date)}
        </p>
        <h4 className="NewsCard__title">{article.title}</h4>
        <p className="NewsCard__subtitle">
          {article.description || article.text}
        </p>
        <p className="NewsCard__source">
          {article.source.name || article.source}
        </p>
      </article>
    </div>
  );
};

export default NewsCard;

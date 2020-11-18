import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import SavedNews from "../SavedNews/SavedNews";
import * as auth from "../../utils/Auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { api } from "../../utils/MainApi";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(false);
  const [isSavedNewsPath, setIsSavedNewsPath] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isErrorServer, setIsErrorServer] = useState(false);
  const [articles, setArticles] = useState();
  const [isFormRegisterActive, setIsFormRegisterActive] = useState(false);
  const [isSignupConfirmationActive, setIsSignupConfirmationActive] = useState(
    false
  );
  const [isFormLoginActive, setIsFormLoginActive] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const [allArticlesFromDB, setAllArticlesFromDB] = useState();
  const [articlesForSavedNews, setArticlesForSavedNews] = useState();
  const [deletedCard, setDeletedCard] = useState();

  useEffect(() => {
    if (deletedCard) {
      const articlesAfterDeletedCard = articlesForSavedNews.sortedArticlesById.filter(
        (item) => {
          return item._id !== deletedCard._id;
        }
      );
      const numberOfArticlesAfterDeletedCard =
        articlesForSavedNews.numberOfArticles - 1;
      const keywordsAfterDeletedCard = { ...articlesForSavedNews.keywords };
      for (const key in keywordsAfterDeletedCard) {
        if (key === deletedCard.keyword) {
          keywordsAfterDeletedCard[key] -= 1;
          if(keywordsAfterDeletedCard[key] === 0) {
            delete keywordsAfterDeletedCard[key];
          }
        }
      }
      setArticlesForSavedNews({
        ...articlesForSavedNews,
        sortedArticlesById: articlesAfterDeletedCard,
        numberOfArticles: numberOfArticlesAfterDeletedCard,
        keywords: keywordsAfterDeletedCard,
      });
    }
  }, [deletedCard]);

  useEffect(() => {
    if (isSavedNewsPath) {
      api
        .getArticles()
        .then((res) => setAllArticlesFromDB(res))
        .catch((err) => console.log(err));
    }
  }, [isSavedNewsPath]);

  useEffect(() => {
    if (allArticlesFromDB) {
      let obj = {};
      obj.keywords = {};
      obj.sortedArticlesById = [...allArticlesFromDB].filter(
        (item) => item.owner._id === currentUser._id
      );
      obj.numberOfArticles = obj.sortedArticlesById.length;
      obj.sortedArticlesById.forEach((element) => {
        if (!obj.keywords[element.keyword]) {
          obj.keywords[element.keyword] = 1;
        } else {
          obj.keywords[element.keyword] += 1;
        }
      });
      setArticlesForSavedNews(obj);
    }
  }, [allArticlesFromDB]);

  useEffect(() => {
    if (!isSavedNewsPath) {
      const articlesLocalStorage = JSON.parse(localStorage.getItem("articles"));
      if (articlesLocalStorage) {
        setArticles(articlesLocalStorage);
        setIsResult(true);
      }
    }
  }, [isSavedNewsPath]);

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  useEffect(() => {
    if (window.location.pathname === "/saved-news") {
      setIsSavedNewsPath(true);
    }

    if (!isLoggedIn) {
      auth
        .getUser()
        .then((res) => {
          if (res._id) {
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsNavigationActive(true));
    }
  }, []);

  useEffect(() => {
    const burger = document.querySelector(".Burger");
    if (isPopupOpened) {
      burger.classList.add("Burger__hidden");
    } else {
      burger.classList.remove("Burger__hidden");
    }
  }, [isPopupOpened]);

  useEffect(() => {
    function handlePopupKeydown(e) {
      if (e.key === "Escape") {
        setIsPopupOpened(false);
      }
    }
    document.addEventListener("keydown", handlePopupKeydown);
    return () => {
      document.removeEventListener("keydown", handlePopupKeydown);
    };
  }, []);

  function setSavedNewsPathBoolean(boolean) {
    setIsSavedNewsPath(boolean);
  }

  function setLoggedInFalse() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          isLoggedIn={isLoggedIn}
          onSetLoggedInFalse={setLoggedInFalse}
          isResult={isResult}
          isLoading={isLoading}
          isNotFoundResult={isNotFoundResult}
          isSavedNewsPath={isSavedNewsPath}
          onSetSavedNewsPathBoolean={setSavedNewsPathBoolean}
          onSetIsPopupOpened={setIsPopupOpened}
          onSetIsLoading={setIsLoading}
          onSetIsResult={setIsResult}
          onSetIsNotFoundResult={setIsNotFoundResult}
          isErrorServer={isErrorServer}
          setIsErrorServer={setIsErrorServer}
          onSetArticles={setArticles}
          articles={articles}
          onSetIsFormRegisterActive={setIsFormRegisterActive}
          onSetIsFormLoginActive={setIsFormLoginActive}
          onSetIsSignupConfirmationActive={setIsSignupConfirmationActive}
          isNavigationActive={isNavigationActive}
        />
        <ProtectedRoute
          component={SavedNews}
          path="/saved-news"
          onSetIsPopupOpened={setIsPopupOpened}
          onSetIsFormLoginActive={setIsFormLoginActive}
          isLoggedIn={isLoggedIn}
          articlesForSavedNews={articlesForSavedNews}
          isSavedNewsPath={isSavedNewsPath}
          onSetDeletedCard={setDeletedCard}
        />
        <Footer onSetSavedNewsPathBoolean={setSavedNewsPathBoolean} />
        <Popup
          isPopupOpened={isPopupOpened}
          onSetIsPopupOpened={setIsPopupOpened}
          isFormRegisterActive={isFormRegisterActive}
          isSignupConfirmationActive={isSignupConfirmationActive}
          onSetIsSignupConfirmationActive={setIsSignupConfirmationActive}
          onSetIsFormRegisterActive={setIsFormRegisterActive}
          isFormLoginActive={isFormLoginActive}
          onSetIsFormLoginActive={setIsFormLoginActive}
          onSetCurrentUser={setCurrentUser}
        />
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;

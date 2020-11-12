import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import SavedNews from "../SavedNews/SavedNews";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isResult, setIsResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(false);
  const [isSavedNewsPath, setIsSavedNewsPath] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  function setPopupOpened() {
    setIsPopupOpened(true);
  }

  function setPopupClosed() {
    setIsPopupOpened(false);
  }

  useEffect(() => {
    if (window.location.pathname === "/saved-news") {
      setIsSavedNewsPath(true);
    }
  }, []);

  useEffect(() => {
    function handlePopupKeydown(e) {
      if (e.key === "Escape") {
        setPopupClosed();
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
      <Main
        isLoggedIn={isLoggedIn}
        onSetLoggedInFalse={setLoggedInFalse}
        isResult={isResult}
        isLoading={isLoading}
        isNotFoundResult={isNotFoundResult}
        isSavedNewsPath={isSavedNewsPath}
        onSetSavedNewsPathBoolean={setSavedNewsPathBoolean}
        onSetPopupOpened={setPopupOpened}
      />
      <Route path="/saved-news">
        <SavedNews isLoggedIn={isLoggedIn} isSavedNewsPath={isSavedNewsPath} />
      </Route>
      <Footer onSetSavedNewsPathBoolean={setSavedNewsPathBoolean} />
      <Popup isPopupOpened={isPopupOpened} onSetPopupClosed={setPopupClosed} />
    </>
  );
};

export default App;

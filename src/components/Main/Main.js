import React from "react";
import AboutAuthor from "../AboutAuthor/AboutAuthor";
import NewsCardList from "../NewsCardList/NewsCardList";
import NotFoundResult from "../NotFoundResult/NotFoundResult";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import "./Main.css";

const Main = ({
  isLoggedIn,
  onSetLoggedInFalse,
  isResult,
  isLoading,
  isNotFoundResult,
}) => (
  <div className="Main">
    <Search isLoggedIn={isLoggedIn} onSetLoggedInFalse={onSetLoggedInFalse} />
    {isLoading && <Preloader />}
    {isResult && <NewsCardList isLoggedIn={isLoggedIn} />}
    {isNotFoundResult && <NotFoundResult />}
    <AboutAuthor />
  </div>
);

export default Main;

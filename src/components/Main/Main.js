import React from 'react';
import Search from '../Search/Search';
import './Main.css';

const Main = ({ isLoggedIn, onSetLoggedInFalse }) => (
  <div className="Main">
    <Search isLoggedIn={isLoggedIn} onSetLoggedInFalse={onSetLoggedInFalse} />
  </div>
);

export default Main;

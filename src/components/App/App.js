import React, { useState } from 'react';
import Main from '../Main/Main';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setLoggedInFalse() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <Main isLoggedIn={isLoggedIn} onSetLoggedInFalse={setLoggedInFalse} />
    </>
  );
};

export default App;

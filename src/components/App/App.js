import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(false);

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
      />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import "./SignupConfirmation.css";

const SignupConfirmation = ({
  onSetIsFormLoginActive,
  onSetIsSignupConfirmationActive,
}) => {
  return (
    <section className="SignupConfirmation">
      <h4 className="SignupConfirmation__title">
        Пользователь успешно зарегистрирован!
      </h4>
      <button
        onClick={() => {
          onSetIsSignupConfirmationActive(false);
          onSetIsFormLoginActive(true);
        }}
        className="SignupConfirmation__link"
      >
        Войти
      </button>
    </section>
  );
};

export default SignupConfirmation;

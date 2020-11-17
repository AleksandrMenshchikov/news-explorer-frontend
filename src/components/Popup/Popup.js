import React from "react";
import Form from "../Form/Form";
import SignupConfirmation from "../SignupConfirmation/SignupConfirmation";
import "./Popup.css";

const Popup = ({
  isPopupOpened,
  onSetIsPopupOpened,
  isFormRegisterActive,
  isSignupConfirmationActive,
  onSetIsSignupConfirmationActive,
  onSetIsFormRegisterActive,
  isFormLoginActive,
  onSetIsFormLoginActive,
  onSetCurrentUser,
}) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("Popup")) {
          onSetIsPopupOpened(false);
        }
      }}
      className={`Popup ${isPopupOpened && "Popup_active"}`}
    >
      <div className="Popup__container">
        {isFormLoginActive && (
          <Form
            title="Вход"
            buttonValue="Войти"
            authText="Зарегистрироваться"
            isPopupOpened={isPopupOpened}
            nameInput={null}
            isFormRegisterActive={isFormRegisterActive}
            onSetIsPopupOpened={onSetIsPopupOpened}
            onSetIsFormRegisterActive={onSetIsFormRegisterActive}
            onSetIsFormLoginActive={onSetIsFormLoginActive}
            isFormLoginActive={isFormLoginActive}
            onSetCurrentUser={onSetCurrentUser}
          />
        )}
        {isFormRegisterActive && (
          <Form
            title="Регистрация"
            buttonValue="Зарегистрироваться"
            authText="Войти"
            isPopupOpened={isPopupOpened}
            nameInput={true}
            isFormRegisterActive={isFormRegisterActive}
            onSetIsPopupOpened={onSetIsPopupOpened}
            onSetIsSignupConfirmationActive={onSetIsSignupConfirmationActive}
            onSetIsFormRegisterActive={onSetIsFormRegisterActive}
            onSetIsFormLoginActive={onSetIsFormLoginActive}
            isFormLoginActive={isFormLoginActive}
          />
        )}
        {isSignupConfirmationActive && (
          <SignupConfirmation
            onSetIsFormLoginActive={onSetIsFormLoginActive}
            onSetIsSignupConfirmationActive={onSetIsSignupConfirmationActive}
          />
        )}
        <button
          onClick={() => {
            onSetIsPopupOpened(false);
          }}
          className="Popup__button-close"
        >
          <div className="Popup__button-close-icon"></div>
        </button>
      </div>
    </div>
  );
};

export default Popup;

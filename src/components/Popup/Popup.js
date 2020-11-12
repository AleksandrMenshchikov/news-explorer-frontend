import React from "react";
import Form from "../Form/Form";
import SignupConfirmation from "../SignupConfirmation/SignupConfirmation";
import "./Popup.css";

const Popup = ({ isPopupOpened, onSetPopupClosed }) => {
  return (
    <div
      onClick={(e) =>
        e.target.classList.contains("Popup") ? onSetPopupClosed() : null
      }
      className={`Popup ${isPopupOpened && "Popup_active"}`}
    >
      <div className="Popup__container">
        <Form
          title="Вход"
          buttonValue="Войти"
          authText="Зарегистрироваться"
          isPopupOpened={isPopupOpened}
          nameInput={null}
        />
        {/* <Form
          title="Регистрация"
          buttonValue="Зарегистрироваться"
          authText="Войти"
          isPopupOpened={isPopupOpened}
          nameInput={true}
        /> */}
        {/* <SignupConfirmation /> */}
        <button onClick={onSetPopupClosed} className="Popup__button-close">
          <div className="Popup__button-close-icon"></div>
        </button>
      </div>
    </div>
  );
};

export default Popup;

import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import * as auth from "../../utils/Auth";

const Form = ({
  title,
  buttonValue,
  authText,
  isPopupOpened,
  nameInput,
  isFormRegisterActive,
  onSetIsSignupConfirmationActive,
  onSetIsFormRegisterActive,
  onSetIsFormLoginActive,
  isFormLoginActive,
  onSetCurrentUser,
  onSetIsPopupOpened,
}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [serverErrorText, setServerErrorText] = useState("");

  const formRef = useRef();
  const buttonRef = useRef();

  function handleInputEmailChange(e) {
    setEmailValue(e.target.value);
    setEmailErrorText(e.target.validationMessage);
  }

  function handleInputPasswordChange(e) {
    setPasswordValue(e.target.value);
    setPasswordErrorText(e.target.validationMessage);
  }

  function handleInputNameChange(e) {
    setNameValue(e.target.value);
    setNameErrorText(e.target.validationMessage);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isFormRegisterActive) {
      auth
        .register(emailValue, passwordValue, nameValue)
        .then((res) => {
          if (res.message) {
            setServerErrorText(res.message);
          } else {
            setServerErrorText("");
            onSetIsSignupConfirmationActive(true);
            onSetIsFormRegisterActive(false);
          }
        })
        .catch((err) => console.log(err));
    }
    if (isFormLoginActive) {
      auth
        .authorize(emailValue, passwordValue)
        .then((res) => {
          if (res.message) {
            setServerErrorText(res.message);
          } else {
            setServerErrorText("");
            auth
              .getUser()
              .then((res) => {
                if (res.message) {
                  setServerErrorText(res.message);
                } else {
                  onSetCurrentUser(res);
                  onSetIsPopupOpened(false);
                }
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    formRef.current.checkValidity()
      ? (buttonRef.current.disabled = false)
      : (buttonRef.current.disabled = true);
    setServerErrorText("");
  }, [emailValue, passwordValue]);

  useEffect(() => {
    if (nameInput) {
      formRef.current.checkValidity()
        ? (buttonRef.current.disabled = false)
        : (buttonRef.current.disabled = true);
      setServerErrorText("");
    }
  }, [nameValue, nameInput]);

  useEffect(() => {
    if (!isPopupOpened) {
      setEmailValue("");
      setPasswordValue("");
      setEmailErrorText("");
      setPasswordErrorText("");
      setNameValue("");
      setServerErrorText("");
    }
  }, [isPopupOpened]);

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className="Form">
      <h4 className="Form__title">{title}</h4>
      <label className="Form__label" htmlFor="email">
        Email
      </label>
      <input
        onChange={handleInputEmailChange}
        type="email"
        id="email"
        name="email"
        className="Form__input"
        placeholder="Введите почту"
        required
        autoComplete="username"
        value={emailValue}
      />
      <span className="Form__input-error">{emailErrorText}</span>
      <label className="Form__label" htmlFor="password">
        Пароль
      </label>
      <input
        onChange={handleInputPasswordChange}
        type="password"
        id="password"
        name="password"
        className="Form__input"
        placeholder="Введите пароль"
        minLength="3"
        required
        autoComplete="current-password"
        value={passwordValue}
      />
      <span className="Form__input-error">{passwordErrorText}</span>
      {nameInput && (
        <>
          <label className="Form__label" htmlFor="name">
            Имя
          </label>
          <input
            onChange={handleInputNameChange}
            type="text"
            id="name"
            name="name"
            className="Form__input"
            placeholder="Введите пароль"
            minLength="2"
            maxLength="30"
            required
            value={nameValue}
          />
          <span className="Form__input-error">{nameErrorText}</span>
        </>
      )}
      <div className="Form__button-container">
        <span className="Form__server-error">{serverErrorText}</span>
        <button
          ref={buttonRef}
          type="submit"
          className="Form__button-submit"
          disabled
        >
          {buttonValue}
        </button>
      </div>
      <p className="Form__auth-text">
        или{" "}
        <button
          type="button"
          onClick={() => {
            if (isFormRegisterActive) {
              onSetIsFormRegisterActive(false);
              onSetIsFormLoginActive(true);
            }
            if (isFormLoginActive) {
              onSetIsFormRegisterActive(true);
              onSetIsFormLoginActive(false);
            }
          }}
          className="Form__auth-link"
        >
          {authText}
        </button>
      </p>
    </form>
  );
};

export default Form;

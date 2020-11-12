import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ title, buttonValue, authText, isPopupOpened, nameInput }) => {
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
  }

  useEffect(() => {
    formRef.current.checkValidity()
      ? (buttonRef.current.disabled = false)
      : (buttonRef.current.disabled = true);
  }, [emailValue, passwordValue]);

  useEffect(() => {
    if (nameInput) {
      formRef.current.checkValidity()
        ? (buttonRef.current.disabled = false)
        : (buttonRef.current.disabled = true);
    }
  }, [nameValue, nameInput]);

  useEffect(() => {
    if (!isPopupOpened) {
      setEmailValue("");
      setPasswordValue("");
      setEmailErrorText("");
      setPasswordErrorText("");
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
        <button ref={buttonRef} type="submit" className="Form__button-submit">
          {buttonValue}
        </button>
      </div>
      <p className="Form__auth-text">
        или{" "}
        <Link to="/" className="Form__auth-link">
          {authText}
        </Link>
      </p>
    </form>
  );
};

export default Form;

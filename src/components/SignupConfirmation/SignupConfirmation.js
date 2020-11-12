import React from 'react'
import { Link } from 'react-router-dom'
import './SignupConfirmation.css'

const SignupConfirmation = () => {
  return (
    <section className="SignupConfirmation">
      <h4 className="SignupConfirmation__title">
        Пользователь успешно зарегистрирован!
      </h4>
      <Link to="/" className="SignupConfirmation__link">
        Войти
      </Link>
    </section>
  );
}

export default SignupConfirmation

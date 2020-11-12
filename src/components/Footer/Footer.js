import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ onSetSavedNewsPathBoolean }) => {
  return (
    <footer className="Footer">
      <section className="Footer__container">
        <p className="Footer__copyright">
          &copy; 2020 Supersite, Powered by News API
        </p>
        <ul className="Footer__navigation">
          <li className="Footer__navigation-item">
            <Link
              onClick={() => onSetSavedNewsPathBoolean(false)}
              to="/"
              className="Footer__navigation-link"
            >
              Главная
            </Link>
          </li>
          <li className="Footer__navigation-item">
            <a
              href="https://praktikum.yandex.ru/web/"
              target="_blank"
              rel="noreferrer"
              className="Footer__navigation-link"
            >
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <div className="Footer__social-media">
          <a
            className="Footer__social-media-link"
            href="https://github.com/AleksandrMenshchikov/news-explorer-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9998 0.894531C5.41678 0.894531 0.894531 5.42298 0.894531 10.9998C0.894531 15.4662 3.7915 19.2503 7.80507 20.5902C8.30754 20.6832 8.49364 20.3731 8.49364 20.1001C8.49364 19.8582 8.48744 19.2254 8.48123 18.3818C5.67111 18.9897 5.07559 17.0295 5.07559 17.0295C4.61654 15.8632 3.95278 15.5531 3.95278 15.5531C3.03469 14.9265 4.02102 14.9389 4.02102 14.9389C5.03217 15.0134 5.57186 15.9811 5.57186 15.9811C6.47135 17.5257 7.93534 17.0791 8.51225 16.8185C8.6053 16.1672 8.86584 15.7205 9.15119 15.4662C6.90558 15.2119 4.54831 14.3434 4.54831 10.4725C4.54831 9.36831 4.93912 8.46883 5.59047 7.76164C5.48501 7.50731 5.13762 6.47755 5.68972 5.088C5.68972 5.088 6.53958 4.81505 8.46882 6.12396C9.27526 5.90064 10.1375 5.78898 10.9998 5.78277C11.8559 5.78898 12.7243 5.90064 13.5308 6.12396C15.46 4.81505 16.3099 5.088 16.3099 5.088C16.862 6.47755 16.5146 7.50731 16.4091 7.76164C17.0543 8.46883 17.4451 9.36831 17.4451 10.4725C17.4451 14.3558 15.0816 15.2057 12.8298 15.46C13.1896 15.7702 13.5184 16.3905 13.5184 17.3334C13.5184 18.6857 13.5059 19.7713 13.5059 20.1063C13.5059 20.3793 13.6858 20.6894 14.2007 20.5902C18.2143 19.2503 21.1051 15.4662 21.1051 11.006C21.1051 5.42298 16.5828 0.894531 10.9998 0.894531Z"
                fill="#191717"
              />
            </svg>
          </a>
          <a
            className="Footer__social-media-link"
            href="https://www.facebook.com/focus.ledsvet/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0V0Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

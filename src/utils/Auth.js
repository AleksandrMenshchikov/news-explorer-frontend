// const BASE_URL_API = "https://api.24news-explorer.ru";
const BASE_URL_API = "http://localhost:4000";

export const register = (email, password, name) => {
  return fetch(`${BASE_URL_API}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => res.json());
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL_API}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const getUser = () => {
  return fetch(`${BASE_URL_API}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const signout = () => {
  return fetch(`${BASE_URL_API}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error("Не удалось выйти из ситемы"));
    }
  });
};

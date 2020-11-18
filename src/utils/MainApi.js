class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then(this._handleResponse);
  }

  deleteArticle(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

export const api = new Api({
  baseUrl: "https://api.24news-explorer.ru",
  // baseUrl: "http://localhost:4000",
});

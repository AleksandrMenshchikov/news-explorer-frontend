const API_KEY = "1af17ceb7497404f9c6d56e7baa901e0";

const BASE_URL_NEWSAPI = "http://newsapi.org/v2/top-headlines/";
const BASE_URL_NOMOREPARTIES =
  "https://nomoreparties.co/news/v2/top-headlines/";

function getNews(query, country = "ru", rangeDays = 7, pageSize = 100) {
  const dateFrom = new Date(Date.now() - 86400000 * rangeDays)
    .toJSON()
    .split("T")[0];
  const dateTo = new Date().toJSON().split("T")[0];

  return fetch(
    `${BASE_URL_NOMOREPARTIES}?q=${query}&country=${country}&from=${dateFrom}&to=${dateTo}&pageSize=${pageSize}&apiKey=${API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export default getNews;

let api =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/main.json";

let series =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/series.json";

let GetHTML = fileName =>
  `https://zeerorgprocessedblog.blob.core.windows.net/compiled/${fileName}.html`;

let ipRegex = /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/;

  if (window.location.hostname.match(ipRegex) || window.location.hostname === "localhost") {
    api = `http://${window.location.hostname}:8081/main.json`;
    series = `http://${window.location.hostname}:8081/series.json`;
    GetHTML = fileName => `http://${window.location.hostname}:8081/html/${fileName}.html`;
  }

export { api, series, GetHTML };

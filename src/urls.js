let api =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/main.json";

let series =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/series.json";

let GetHTML = fileName =>
  `https://zeerorgprocessedblog.blob.core.windows.net/compiled/${fileName}.html`;

  if (window.location.hostname === "localhost") {
    api = "http://localhost:8080/main.json";
    series = "http://localhost:8080/series.json";
    GetHTML = fileName => `http://localhost:8080/html/${fileName}.html`;
  }

export { api, series, GetHTML };

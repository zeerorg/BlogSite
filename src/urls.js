let api =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/main.json";

let series =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/series.json";

let GetHTML = fileName =>
  `https://zeerorgprocessedblog.blob.core.windows.net/compiled/${fileName}.html`;

  if (window.location.hostname === "localhost") {
    api = "http://localhost:8081/main.json";
    series = "http://localhost:8081/series.json";
    GetHTML = fileName => `http://localhost:8081/html/${fileName}.html`;
  }

  if (window.location.hostname.includes("192.168")) {
    api = "http://192.168.1.12:8081/main.json";
    series = "http://192.168.1.12:8081/series.json";
    GetHTML = fileName => `http://192.168.1.12:8081/html/${fileName}.html`;
  }

export { api, series, GetHTML };

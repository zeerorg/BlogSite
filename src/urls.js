let api =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/main.json";

let GetHTML = fileName =>
  `https://zeerorgprocessedblog.blob.core.windows.net/compiled/${fileName}.html`;

  if (process.env.NODE_ENV === "development") {
    api = "http://localhost:8080/main.json";
    GetHTML = fileName => `http://localhost:8080/html/${fileName}.html`;
  }

export { api, GetHTML };

const api =
  "https://zeerorgprocessedblog.blob.core.windows.net/metadata/main.json";
const GetHTML = fileName =>
  `https://zeerorgprocessedblog.blob.core.windows.net/compiled/${fileName}.html`;

export { api, GetHTML };

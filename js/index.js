const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello world!"));

app.get("/Path1", function (req, res) {
  res.send("GET Path1");
});

app.use(express.static("public"));

app.get("/webapi", function (req, res) {
  var searchingData = "삼성";
  var request = require("request");
  var options = {
    method: "GET",
    url:
      "https://openapi.naver.com/v1/search/news.json?query=" +
      encodeURI(searchingData),
    headers: {
      "X-Naver-Client-Id": "HH2fJNFYyJKtPz_WyAl8",
      "X-Naver-Client-Secret": "TymPEM45jw",
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
});

app.listen(port, () =>
  console.log(`Example app listening a
t http://localhost:${port}`)
);

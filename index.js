const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "public/js/index.html");
});

app.get("/webapi", function (req, res) {
  let word = req.query.word;
  console.log(word);
  var request = require("request");
  var options = {
    method: "GET",
    url:
      "https://openapi.naver.com/v1/search/news.json?query=" + encodeURI(word),
    headers: {
      "X-Naver-Client-Id": "HH2fJNFYyJKtPz_WyAl8",
      "X-Naver-Client-Secret": "TymPEM45jw",
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    console.log(word);
    res.send(response.body);
  });
});

app.listen(port, () =>
  console.log(`Example app listening a
t http://localhost:${port}`)
);

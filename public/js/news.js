let tmpNews = [
  "news1",
  "news2",
  "news3",
  "news4",
  "news5",
  "news6",
  "news7",
  "news8",
  "news9",
  "news10",
];

const searchForm = document.querySelector("#search-form");
const searchText = document.querySelector("#search-text");
const newsBoxAnchors = document.querySelectorAll(".news-box > a");

function handleSearchSubmit(event) {
  event.preventDefault();
  let word = searchText.value;
  searchText.value = "";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      //console.log(this.responseText);
      let jsonData = JSON.parse(this.responseText);
      for (let i = 0; i < 10; i++) {
        tmpNews[i] = jsonData.items[i].title;
        newsBoxAnchors[i].innerHTML = jsonData.items[i].title;
        newsBoxAnchors[i].href = jsonData.items[i].link;
      }
    }
  });
  xhr.open("GET", "http://localhost:3000/webapi?word=" + encodeURI(word));
  xhr.send();
}

searchForm.addEventListener("submit", handleSearchSubmit);

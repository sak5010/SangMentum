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

const timer = 2000;

const first = document.querySelector("#news-first");
const second = document.querySelector("#news-second");
const third = document.querySelector("#news-third");

const searchForm = document.querySelector("#search-form");
const searchText = document.querySelector("#search-text");

let move = 2;
let dataCnt = 1;
let listCnt = 1;

first.children[0].innerHTML = tmpNews[0];

setInterval(() => {
  if (move === 2) {
    first.classList.remove("card_sliding");
    first.classList.add("card_sliding_after");

    second.classList.remove("card_sliding_after");
    second.classList.add("card_sliding");

    third.classList.remove("card_sliding_after");
    third.classList.remove("card_sliding");

    move = 0;
  } else if (move === 1) {
    first.classList.remove("card_sliding_after");
    first.classList.add("card_sliding");

    second.classList.remove("card_sliding_after");
    second.classList.remove("card_sliding");

    third.classList.remove("card_sliding");
    third.classList.add("card_sliding_after");

    move = 2;
  } else if (move == 0) {
    first.classList.remove("card_sliding_after");
    first.classList.remove("card_sliding");

    second.classList.remove("card_sliding");
    second.classList.add("card_sliding_after");

    third.classList.remove("card_sliding_after");
    third.classList.add("card_sliding");

    move = 1;
  }

  if (dataCnt < tmpNews.length - 1) {
    document.querySelector(".news-box").children[
      listCnt
    ].children[0].innerHTML = tmpNews[dataCnt];
    dataCnt++;
  } else if (dataCnt == tmpNews.length - 1) {
    document.querySelector(".news-box").children[
      listCnt
    ].children[0].innerHTML = tmpNews[dataCnt];
    dataCnt = 0;
  }

  if (listCnt < 2) {
    listCnt++;
  } else if (listCnt == 2) {
    listCnt = 0;
  }
}, timer);

function handleSearchSubmit(event) {
  event.preventDefault();
  searchText.value;
  searchText.value = "";
}

searchForm.addEventListener("submit", handleSearchSubmit);

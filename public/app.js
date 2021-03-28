const share = document.querySelectorAll(".share");
const news = document.querySelector("#new");
share[0].addEventListener("click", check);
share[1].addEventListener("click", check);

function check() {
  // news.classList.toggle('hidden');
  if (news.classList.contains("hidden")) {
    news.classList.remove("hidden");
  } else {
    news.classList.add("hidden");
  }
}

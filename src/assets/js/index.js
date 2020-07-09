"use strict";

function bgimg() {
  const bgimg = document.querySelectorAll(".bgimg");
  for (let i = 0; i < bgimg.length; i++) {
    if (bgimg[i].querySelector("img")) {
      bgimg[i].style.backgroundImage =
        "url(" + bgimg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

bgimg();

const menu = document.querySelector(".icon-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.nextElementSibling.classList.toggle("active");
});

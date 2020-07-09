"use strict";

// Images through background

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

// Burger menu

const menu = document.querySelector(".icon-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.nextElementSibling.classList.toggle("active");
});

// Prevenent default

document.querySelectorAll("a").forEach((el) => {
  if (el.getAttribute("href") === "#") {
    el.addEventListener("click", (e) => e.preventDefault());
  }
});

// Scroll

const anchors = document.querySelectorAll(".scroll");

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const id = anchor.getAttribute("href").substr(1);

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

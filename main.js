// https://preview.uideck.com/items/appvilla/

const toggleNav = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");
toggleNav.addEventListener("click", function () {
  if (this.classList.contains("clicked")) {
    this.classList.remove("clicked");
    nav.style.display = "none";
  } else {
    this.classList.add("clicked");
    nav.style.display = "block";
  }
});

//
const bullets = document.querySelectorAll(".bullet");
const reviews = document.querySelectorAll(".review");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", function () {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");
    }
    reviews.forEach((review) => {
      if (this.id == review.dataset.id) {
        review.classList.remove("hide");
      } else {
        review.classList.add("hide");
      }
    });
    this.classList.add("active");
  });
});

//Q&A
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
questions.forEach((q) => {
  q.addEventListener("click", function () {
    for (let i = 0; i < questions.length; i++) {
      questions[i].classList.remove("active");
      answers[i].classList.add("hide");
    }
    this.classList.add("active");
    this.nextElementSibling.classList.remove("hide");
  });
});

//
const headers = Array.from(document.querySelectorAll("header"));
const goUps = Array.from(document.querySelectorAll(".go-up"));
window.addEventListener("scroll", function () {
  if (this.scrollY < 300) {
    headers.forEach((header) => {
      header.classList.remove("white-bg");
    });
    goUps.forEach(goUp => {
        goUp.style.opacity = "0";
    });
  } else if (this.scrollY >= 300) {
    headers.forEach((header) => {
        header.classList.add("white-bg");
    });
    goUps.forEach(goUp => {
        goUp.style.opacity = "1";
    });
  }
});

const hamburger = document.querySelector(".hamburger");
const backDrop = document.querySelector(".backdrop");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  backDrop.classList.add("active");
  navMenu.classList.add("active");
});
backDrop.addEventListener("click", () => {
  backDrop.classList.remove("active");
  navMenu.classList.remove("active");
});

const firstMenu = document.querySelectorAll(".first-row > li");

firstMenu.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("active");
  });
});

// question Box

const question = document.querySelector(".question img");
const questionBox = document.querySelector(".question__box");
const closeQuestionBox = document.querySelector(".close");
const commonQuestion = questionBox.querySelector(".common-question");
const questionItems = commonQuestion.querySelectorAll("li");

question.addEventListener("click", () => {
  questionBox.classList.add("active");
});
closeQuestionBox.addEventListener("click", (e) => {
  questionBox.classList.remove("active");
});

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show");
  });
});
// question Box

// slider

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const items = document.querySelectorAll("#slider .item");
const navigation = document.querySelectorAll(".slider__navigation li");
const totalItems = items.length;
let index = 0;
let duration = 6000;


nextBtn.addEventListener("click", () => {
  slider("next");
});
prevBtn.addEventListener("click", () => {
  slider("prev");
});

function slider(dir) {
  navigationSlide();
  if (dir === "next") {
    if (index === totalItems - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  if (dir === "prev") {
    if (index === 0) {
      index = totalItems - 1;
    } else {
      index--;
    }
  }
  clearInterval(timer);
  timer = setInterval(autoSlide, duration);

  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[index].classList.add("active");
}

function navigationSlide() {
  navigation.forEach((item) => {
    item.classList.remove("active");
  });
  navigation[index].classList.add("active");
}

function autoSlide() {
  slider("next");
  navigationSlide();
}

var timer = setInterval(autoSlide, duration);

// end slider

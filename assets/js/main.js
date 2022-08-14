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
  questionBox.classList.add('active');
});
closeQuestionBox.addEventListener("click", (e) => {
    questionBox.classList.remove('active');
});

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show");
  });
});
// question Box

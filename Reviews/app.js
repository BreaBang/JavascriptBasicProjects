// local reviews data
const reviews = [
  {
    id: 1,
    name: "Bear",
    job: "Chow Chow",
    img:
      "/Users/breannabang/Desktop/40 JavaScript Projects/Reviews/Images/dog-2.png",
    text:
      "She taught me how to sit for my mommy in one session.",
  },
  {
    id: 2,
    name: "Bruce",
    job: "Mastiff",
    img:
      "/Users/breannabang/Desktop/40 JavaScript Projects/Reviews/Images/dog-1.png",
    text:
      "I used to jump on people when they came home. I'm still excited to see my family but I don't knock anyone over anymore.",
  },
  {
    id: 3,
    name: "Star",
    job: "Border Collie",
    img:
      "/Users/breannabang/Desktop/40 JavaScript Projects/Reviews/Images/dog-3.png",
    text:
      "I have a lot of energy. She taught my parent's games they can play with me to keep me from getting bored.",
  },
  {
    id: 4,
    name: "Goliath",
    job: "German Sheperd",
    img:
      "/Users/breannabang/Desktop/40 JavaScript Projects/Reviews/Images/dog-4.png",
    text:
      "She taught my parents how to redirect me when I start barking at something. Our neighbors really apprecite it.",
  },
];
// select items
const img = document.getElementById("dog-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

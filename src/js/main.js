// Task 1

const sendMsgs = () => {
  let seconds = 0;

  const msgInterval = setInterval(() => {
    seconds++;

    alert("Повідомлення");

    if (seconds === 5) clearInterval(msgInterval);
  }, 1000);
};

sendMsgs();

// Task 2

const colorBox = document.querySelector(".color-box");

let red;
let green;
let blue;

const colorInterval = setInterval(() => {
  red = Math.random() * (255 - 0) + 0;
  green = Math.random() * (255 - 0) + 0;
  blue = Math.random() * (255 - 0) + 0;

  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}, 500);

// Task 3

const gameBox = document.querySelector(".game__box");
const startGameBtn = document.querySelector(".game__start");
const gameSeconds = document.querySelector(".game__seconds");

startGameBtn.addEventListener("click", () => {
  startGameBtn.setAttribute("disabled", "");

  let seconds = 5;
  let clickCounter = 0;

  gameBox.addEventListener("click", () => clickCounter++);

  const timer = setInterval(() => {
    seconds--;

    gameSeconds.textContent = seconds;

    if (seconds === 0) {
      alert(`Ви натиснули ${clickCounter} раз за 5 секунд. Ваш кпс: ${clickCounter / 5}`);

      clearInterval(timer);
      gameBox.removeEventListener("click", () => clickCounter++);
      startGameBtn.removeAttribute("disabled");
      gameSeconds.textContent = "5";
    }
  }, 1000);
});

// Task 4

const secondsInput = document.querySelector(".seconds-input");
const secondsBtn = document.querySelector(".seconds-btn");

secondsBtn.addEventListener("click", () => {
  const seconds = Number(secondsInput.value);

  if (seconds > 0) {
    secondsInput.value = "";
    secondsBtn.setAttribute("disabled", "");

    setTimeout(() => {
      alert(`Пройшло ${seconds} секунд`);
      secondsBtn.removeAttribute("disabled");
    }, seconds * 1000);
  }
});

// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const h3 = document.querySelector("h3"),
  rangeNum = document.querySelector(".js-range"),
  getNum = document.querySelector(".js-getNum"),
  button = document.querySelector("button"),
  random = document.querySelector(".js-random"),
  result = document.querySelector(".js-result");

var getValue;

function handleClick(event) {
  event.preventDefault();
  if (getNum.value === "") {
  } else {
    const min = rangeNum.min;
    const max = rangeNum.value;
    var randomNum = Math.floor(Math.random() * max);
    random.innerText = `You choose: ${getValue}, the machine choose ${randomNum}`;
    if (parseInt(getValue) === randomNum) {
      result.innerText = "You Won!";
    } else {
      result.innerText = "You Lost!";
    }
  }
}

function handleChangeGetNum() {
  getValue = getNum.value;
}

function handleChangeRangeNum(event) {
  h3.innerText = `Generate the number between 0 and ${rangeNum.value}`;
}

function init() {
  rangeNum.addEventListener("change", handleChangeRangeNum);
  getNum.addEventListener("change", handleChangeGetNum);
  button.addEventListener("click", handleClick);
}

init();

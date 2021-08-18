const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const hanleAdd = () => {
  count = count + 1;
  updateText();
}

const hanleMinus = () => {
  count = count - 1;
  updateText();
}

add.addEventListener('click', hanleAdd);
minus.addEventListener('click', hanleMinus);
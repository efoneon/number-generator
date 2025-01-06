let min = 1;
let max = 100;

const numSpan = document.querySelector('#num-result');
const btn = document.querySelector('#gen-random-btn');

btn.addEventListener("click", () => {
  const num = genRandomNum(min, max);
  numSpan.textContent = num;
});

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
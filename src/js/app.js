const inner = Array.from(document.getElementsByClassName('inner'));
const imgLink = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isLoad() {
  const i = getRandomInt(inner.length);
  inner[i].innerHTML = `<img src="${imgLink}">`;
  setInterval(() => {

  }, 5000);
}
document.addEventListener('DOMContentLoaded', isLoad);

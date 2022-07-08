const inner = Array.from(document.getElementsByClassName('inner'));
const imgLink = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

function getRandomInt(max, exep) {
  if (exep === Math.floor(Math.random() * max)) {
    getRandomInt(max, exep);
  } else {
    return Math.floor(Math.random() * max);
  }
}

const i = Math.floor(Math.random() * inner.length);
inner[i].innerHTML = `<img class='img' src="${imgLink}">`;

function changeCell() {
  inner.forEach((i) => {
    console.log(i.childElementCount);
  });
  const j = getRandomInt(inner.length, 5);
  inner[j].innerHTML = `<img class='img' src="${imgLink}">`;
}
changeCell();
// setInterval(changeCell(), 5000);

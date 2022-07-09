const innerList = Array.from(document.getElementsByClassName('inner'));
const imgLink = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';
let index;
let lastIndex;

index = Math.floor((Math.random() * innerList.length));
innerList[index].innerHTML = `<img class='img' src="${imgLink}">`;
lastIndex = index;

setInterval(() => {
  index = Math.floor((Math.random() * innerList.length));
  if (index === lastIndex) {
    index += 1;
    if (index >= innerList.length) {
      index = 0;
    }
  }
  innerList[index].innerHTML = `<img class='img' src="${imgLink}">`;
  if (lastIndex >= 0) {
    innerList[lastIndex].innerHTML = '';
  }
  lastIndex = index;
}, 1000);

const container = document.querySelector("#container");
//캐러셀 영역
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

//첫 번째 이미지를 기본으로 합니다.
container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id == "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  });
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("오른쪽 버튼을 사용할 수 없습니다.");
});

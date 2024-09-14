const noti_box = document.querySelector("#noti-box");
const btn = document.querySelector("#bttn");

btn.addEventListener("click", function (e) {
  const items = document.createElement("div"); //div(아이템) 생성
  const itemText = document.createTextNode("알림 내용이 표시됩니다.");

  noti_box.appendChild(items);
  items.appendChild(itemText);
  setTimeout(function () {
    items.parentNode.removeChild(items);
  }, 3000);
});

//noti_box

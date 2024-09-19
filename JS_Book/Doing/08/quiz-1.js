const btn = document.querySelector("#bttn");
let today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const date = today.getDate();
const dayBox = document.querySelector("#days");

btn.addEventListener("click", function (e) {
  const inputY = document.querySelector("#year").value;
  const inputM = document.querySelector("#month").value;
  const inputD = document.querySelector("#date").value;
  const currentBox = document.querySelector("#current");

  const birthday = new Date(inputM + "/" + inputD + "/" + inputY);
  let timeNow = today.getTime();
  let timeBirth = birthday.getTime();
  let livedTime = timeNow - timeBirth;
  let livedDay = Math.round(livedTime / (60 * 60 * 24 * 1000));

  dayBox.innerHTML = `날짜로는 ${livedDay}일을 살아왔고,`;
});

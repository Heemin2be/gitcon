const result = document.querySelector("#result");
const firstDay = new Date("2024-07-01");
const today = new Date();
const passedTime = today.getTime() - firstDay.getTime();
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

result.innerText = passedDay;

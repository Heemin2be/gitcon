function changeBackground() {
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}
const button = document.querySelector("button");
button.onclick = changeBackground;

const btn = document.querySelector("#bttn");
const nav = document.querySelector("#nav");
btn.addEventListener("click", (e) => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

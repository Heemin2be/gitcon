const button = document.querySelector("button");

button.addEventListener("click", changeBackground);

changeBackground = () => {
  document.body.style.backgroundColor = "green";
};

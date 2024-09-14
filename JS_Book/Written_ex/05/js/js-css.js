const title = document.querySelector("#title");
const name = document.querySelectorAll("#desc p")[0];

name.onclick = () => {
  name.style.backgroundColor = "red";
  name.style.color = "black";
};
title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "white";
};

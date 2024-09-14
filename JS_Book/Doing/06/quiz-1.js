const images = document.querySelector("#images");
const pics = ["pic-1.jpg", "pic-6.jpg"];

images.addEventListener("mouseover", (e) => {
  images.src = `images/${pics[1]}`;
});
images.addEventListener("mouseout", (e) => {
  images.src = `images/${pics[0]}`;
});

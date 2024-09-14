const box = document.querySelector("#box");

box.addEventListener("mousemove", (e) => {
  alert(`마우스 움직임! ${e.pageX},${e.pageY}`);
});

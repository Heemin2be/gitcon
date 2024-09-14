const bttn = document.querySelector("button");
const popWidth = 600;
const popHeight = 500;

bttn.addEventListener(() => {
  let left = (screen.availWidth - popWidth) / 2;
  let top = (screen.availHeight - popHeight) / 2;
  window.open(
    "notice.html",
    "이벤트 팝업",
    `width=${popWidth} height = ${popWidth} left = ${left} top = ${top}`
  );
});

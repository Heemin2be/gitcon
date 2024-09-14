const items = document.querySelectorAll("li");
for (item of items) {
  item.addEventListener("click", function (e) {
    this.parentNode.removeChild(this);
    // body
  });
}

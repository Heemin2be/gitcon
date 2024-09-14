const detail = document.querySelector("#detail");
const viewbtn = document.querySelector("#view");

togleDetail = () => {
  detail.classList.toggle("hidden");
};

viewbtn.onclick = togleDetail;

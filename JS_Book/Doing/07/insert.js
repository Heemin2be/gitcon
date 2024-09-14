let textBtn = document.querySelector("#textBtn");

textBtn.addEventListener(
  "click",
  (e) => {
    let ElName = document.createElement("p");
    let TxNode = document.createTextNode("Typescript");
    let exNode = document.querySelectorAll("p")[0];
    ElName.appendChild(TxNode);
    document.body.insertBefore(ElName, exNode);
  },
  { once: true }
);

const regBtn = document.querySelector("#regBtn");
const attendant = document.querySelector("#attendant");
const username = document.querySelector("#username");
const major = document.querySelector("#major");
const tbody = document.querySelector("tBody");

regBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // tbody.innerHTML = `
  // <tr>
  //   <td>${username.value}</td>
  //   <td>${major.value}</td>
  // </tr>
  // `;

  const row = document.createElement("tr");
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");

  tbody.appendChild(row);
  row.appendChild(col1);
  row.appendChild(col2);

  col1.innerText = username.value;
  col2.innerText = major.value;

  username.value = "";
  major.value = "";
});

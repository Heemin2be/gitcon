const n = document.querySelector("#number1");
const m = document.querySelector("#number2");
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function () {
  result.innerText = getGCD(n.value, m.value);
};

function getGCD(n, m) {
  if (n < m) {
    swap(n, m);
  }

  let x;
  while (m != 0) {
    x = m % n;
    console.log("🚀 ~ getGCD ~ x = m % n;:", x);
    m = n;
    n = r;
  }
  return m;
}

let btn = document.querySelector("button");
let GCDresult = document.querySelector("#result");

btn.onclick = function () {
  Input1 = document.querySelector("input#number1").value;
  Input2 = document.querySelector("input#number2").value;
  Input1 = parseInt(Input1);
  Input2 = parseInt(Input2);
  GCDresult.innerText = getGCD(Input1, Input2);
};

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i; // 최대공약수
    }
  }
  return GCD;
}

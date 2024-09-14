let userInput = prompt("1보다 큰 정수를 입력하세요.");

userInput = parseInt(userInput);

let sum = 0;
if (userInput !== null) {
  for (i = 1; userInput >= i; i++) {
    if (i % 2 === 0) {
      sum += i;
      console.log(`${i}은 더해짐`);
    } else {
      console.log(`${i}은(는) 안더해짐`);
    }
  }
} else {
  document.write("다시입력하세요.");
  setInterval(function () {
    location.reload();
  }, 1000);
}

alert(sum);

let userInput = prompt("숫자를 입력하세요.");

userInput = parseInt(userInput);
console.log("🚀 ~ userInput:", userInput);

if (userInput !== null && !isNaN(userInput)) {
  if (userInput > 0) {
    document.write(`${userInput}은(는) 양수입니다.`);
  } else if (userInput < 0) {
    document.write(`${userInput}은(는) 음수입니다.`);
  } else {
    document.write("입력하신 값은 0입니다.");
  }
} else {
  document.write("다시 입력하십시요.");
  setInterval(function () {
    location.reload();
  }, 2000);
}

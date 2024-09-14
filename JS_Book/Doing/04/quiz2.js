//쵀대공약수 구하기 ->
//1. 두 수의 약수를 찾고
//2. 두 수의 약수들 중 겹치는 수 뺴내기
//3. 빼낸 값중에서 제일 큰값 걸러내기.
let num1 = prompt("첫번째 수를 입력하세요 : ");
let num2 = prompt("두번째 수를 입력하세요 : ");

num1 = parseInt(num1);
console.log("🚀 ~ num1:", num1);
num2 = parseInt(num2);
console.log("🚀 ~ num2:", num2);

let arry1 = [];
let arry2 = [];

if (!isNaN(num1) && !isNaN(num2) && num1 !== null && num2 !== null) {
  let j = 0;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      //값을 나눈 나머지가 0인경우 = 약수
      arry1[j] = i;
      j++;
    } else {
    } //값을 나눈 나머지가 0이 아닌경우 = 약수아님 필요없음.
  }
  j = 0; //인덱스 초기화
  for (let i = 1; i <= num1; i++) {
    if (num2 % i === 0) {
      arry2[j] = i;
      j++;
    } else {
    }
  }
}
let yaksu = [];
let k = 0;
for (let i = 0; i < arry1.length; i++) {
  for (let j = 0; j < arry2.length; j++) {
    if (arry1[i] === arry2[j]) {
      yaksu[k] = arry1[i];
      k++;
      console.log("🚀 ~ k:", k);
    }
  }
}

let max = Math.max(...yaksu);
console.log(yaksu);
console.log(max);
document.write(`${max}이(가) 최대공약수 입니다.`);

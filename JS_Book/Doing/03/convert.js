let fah = parseFloat(prompt("변환할 화씨온도"));
let cel;

cel = ((fah - 32) / 1.8).toFixed(2);
alert(`${fah}℉ 는 ${cel}℃ 입니다.`);

const majorOpt = document.querySelector("#major");

altmajor = () => {
  let selectedMenu = majorOpt.options[majorOpt.selectedIndex].innerText;
  alert(`선택하신 학과는 [${selectedMenu}]입니다.`);
};

majorOpt.onchange = altmajor;

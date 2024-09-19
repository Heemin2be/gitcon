let changeBg = () => {
  const bgCount = 5;

  let randomNumber = Math.floor(Math.random() * 5) + 1;
  // console.log(randomNumber);
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
};

document.addEventListener("load", changeBg());

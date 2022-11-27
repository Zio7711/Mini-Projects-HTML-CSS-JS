document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickContent = item.innerHTML;
    const resultElement = document.querySelector(".result");
    if (clickContent === "=") {
      resultElement.innerHTML = eval(resultElement.innerHTML);
    } else if (clickContent === "reset") {
      resultElement.innerHTML = "";
    } else {
      resultElement.innerHTML += clickContent;
    }
  });
});

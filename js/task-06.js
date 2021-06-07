const inputText = document.querySelector("#validation-input");

const carrentLength = Number(inputText.getAttribute("data-length"));
// console.log(typeof carrentLength);

const onInputBlur = () => {
  //   if (inputText.value.length === 0) {
  //     inputText.classList.remove("invalid");
  //     inputText.classList.remove("valid");
  //   }
  if (inputText.value.length === carrentLength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
};
inputText.addEventListener("blur", onInputBlur);

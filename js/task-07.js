const inputEl = document.querySelector("#font-size-control");
const textTarget = document.querySelector("#text");

const onChangeFont = () => {
  textTarget.style.fontSize = `${inputEl.value}px`;
};

// const onChangeFont = (event) => {
//   textTarget.style.fontSize = event.currentTarget.value + "px";
// };

inputEl.addEventListener("input", onChangeFont);

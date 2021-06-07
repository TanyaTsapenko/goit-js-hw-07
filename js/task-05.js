const refs = {
  name: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

const onFormSubmit = () => {
  const inputValue = refs.name.value;
  refs.title.textContent =
    inputValue === "" || inputValue[0] === " " ? "незнакомец" : inputValue;
};
refs.name.addEventListener("input", onFormSubmit);

// const onFormSubmit = (even) => {
//   refs.title.textContent =
//     refs.name.value.trim() === "" ? "незнакомец" : even.currentTarget.value;
// };
// refs.name.addEventListener("input", onFormSubmit);

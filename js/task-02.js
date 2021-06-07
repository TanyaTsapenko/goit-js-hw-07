const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const addElement = document.createElement("li");
  // console.log(addElement);
  addElement.textContent = ingredient;
  // console.log(addElement);

  ingredientsList.append(addElement);
});

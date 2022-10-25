const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('ul#ingredients');
const ingredientsItems = ingredients.map(Name => {
  const listRef = document.createElement('li');

  listRef.textContent = Name;
  listRef.classList.add('item');

  return listRef;
});

ingredientsList.append(...ingredientsItems);
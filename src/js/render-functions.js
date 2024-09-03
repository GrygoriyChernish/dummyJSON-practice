import { refs } from './refs';

export function renderRecipesList(recipes, element) {
  const markup = recipes
    .map(
      ({ image, cookTimeMinutes, cuisine, name, difficulty, id }) => `
  <li class="recipes-list-item">
        <img src="${image}" alt="${name}" data-id="${id}">
        <div>
          <p>${name}</p>
          <p>Cuisine: ${cuisine}</p>
          <p>Difficulty: ${difficulty}</p>
          <p>CookTime: ${cookTimeMinutes}</p>
        </div>
      </li>
  `
    )
    .join('');
  element.insertAdjacentHTML('beforeend', markup);
}

export function renderRecipeInModal({
  image,
  name,
  ingredients,
  instructions,
}) {
  const markup = `<img class="modal-img" src="${image}" alt="${name}" />
      <div class="recipe-info">
        <p>${name}</p>
        <p>Ingredients: ${ingredients.join(',')}</p>
        <p>Instructions:</p>
        <ol>${instructions.map(item => `<li>${item}</li>`).join('')}</ol>
       <button class="add-to-favorites" type="button">Add to favorites</button>
      <button class="modal-close-btn" type="button">X</button>
      </div>`;
  refs.modal.innerHTML = markup;
}

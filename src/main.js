import { onBackdropClick, onRecipesItemClick } from './js/handlers';
import { getAllRecipes } from './js/recipes-api';
import { refs } from './js/refs';
import { renderRecipesList } from './js/render-functions';

document.addEventListener('DOMContentLoaded', async evt => {
  try {
    const { recipes } = await getAllRecipes();
    renderRecipesList(recipes, refs.recipesList);
  } catch (error) {
    console.log(error);
  }
});

refs.recipesList.addEventListener('click', onRecipesItemClick);
refs.backdrop.addEventListener('click', onBackdropClick);
console.log('asdasdasd');

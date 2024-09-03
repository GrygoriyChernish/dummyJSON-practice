import { closeModal, openModal } from './modal';
import { getRecipeById } from './recipes-api';
import { renderRecipeInModal } from './render-functions';
import { state } from './state';

export function onEscPress(evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  closeModal();
}

export async function onRecipesItemClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  openModal();
  const id = evt.target.dataset.id;
  const recipe = await getRecipeById(id);
  renderRecipeInModal(recipe);
  const addToFavoritesBtn = document.querySelector('.add-to-favorites');
  addToFavoritesBtn.addEventListener('click', evt => {
    addToFavorite(recipe, evt);
  });
  console.log(addToFavoritesBtn);
}

export function onBackdropClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }

  if (evt.target.classList.contains('modal-close-btn')) {
    closeModal();
  }
}

function addToFavorite(recipe, evt) {
  if (evt.target.textContent === 'Add to favorites') {
    state.favorites.push(recipe);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  } else {
  }
}

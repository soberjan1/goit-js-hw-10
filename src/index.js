import { fetchBreeds } from './cat-api.js';

const refs = {
  selectEl: document.querySelector('.breed-select'),
  catInfoDiv: document.querySelector('cat-info'),
};

fetchBreeds();

refs.selectEl.addEventListener('change', renderBreedsList);
function renderBreedsList(breeds) {
  const markup = breeds
    .map(breed => {
      return '<option value= "${breed.reference_image_id }">${breed.name}</option>';
    })
    .join('');
  selectEl.innerHTML = markup;
}

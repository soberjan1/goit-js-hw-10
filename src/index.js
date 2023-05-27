import { fetchBreeds } from './cat-api.js';

const refs = {
  selectEl: document.querySelector('.breed-select'),
  catInfoDiv: document.querySelector('cat-info'),
};

refs.selectEl.addEventListener('change', () => {
  fetchBreeds()
    .then(breeds => renderSelect(breeds))
    .catch(error => comsole.log(error));
});

function renderSelect(breeds) {
  const markup = breeds
    .map(({ reference_image_id, name }) => {
      return '<option value= "${reference_image_id}">${name}</option>';
    })
    .join('');
  selectEl.innerHTML = markup;
}

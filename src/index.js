import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

error.setAttribute('hidden', '');
loader.classList.add('hidden');

fetchBreeds()
  .then(data => {
    const murkup = data
      .map(cat => `<option value="${cat.id}">${cat.name}</option>`)
      .join('');
    select.innerHTML = murkup;
  })
  .catch(error => {
    error.removeAttribute('hidden', '');
    console.log(error);
  });

select.addEventListener('change', elem => {
  loader.classList.remove('hidden');
  fetchCatByBreed(elem.target.value)
    .then(data => {
      catInfo.innerHTML = createMurkup(data);
    })
    .catch(error => {
      error.classList.remove('hidden');
      console.log(error);
    });
});

function createMurkup(cat) {
  loader.classList.add('hidden');
  const murkup = cat
    .map(
      cat =>
        `   <img class="cat-img" src="${cat.url}" width="350"/>
                <div class="cat-description">
                <h2 class="name-cat">${cat.breeds[0].name}</h2>
                <p class="description">${cat.breeds[0].description}</p>
                <p>
                <h3 class="name-cat">Temperament:</h3> 
                ${cat.breeds[0].temperament}</p>
            </div>                        
        `
    )
    .join('');
  return murkup;
}

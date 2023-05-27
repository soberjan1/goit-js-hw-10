export function fetchBreeds(breed) {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    '?api_key=live_YdzUqo3z5NqyWa5NxNxNq2zLwM5Y3I1KhOqtR5Oaqqa5h0K2hA2RnDNiPzcjnOeo';

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .catch(error => console.log(error));
}

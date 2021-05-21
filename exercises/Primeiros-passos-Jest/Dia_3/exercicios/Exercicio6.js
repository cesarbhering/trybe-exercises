const fetch = require('node-fetch');

const dogPicture = async () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      return data.message})
    .catch((error) => new Error ('error'));
}

module.exports = dogPicture;
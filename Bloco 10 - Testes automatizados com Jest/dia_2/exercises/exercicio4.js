const fetch = require('node-fetch');
const API_URL = 'https://api.github.com/orgs/tryber/repos'

const getRepos = (url) => {
  return fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = { API_URL, getRepos }
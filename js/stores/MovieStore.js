class MovieStore {
  static getAll() {
    var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

    return fetch(REQUEST_URL)
      .then((response) => response.json());
  }
}

module.exports = MovieStore;

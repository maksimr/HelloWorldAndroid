class MovieStore {
  static getAll() {
    var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';

    var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
    var PAGE_SIZE = 15;
    var QUERY_PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
    var REQUEST_URL = API_URL + QUERY_PARAMS;

    return fetch(REQUEST_URL)
      .then((response) => response.json());
  }
}

module.exports = MovieStore;

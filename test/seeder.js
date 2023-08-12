const axios = require('axios');
const movieList = require('./movies.json');

(async () => {
  for (let i = 0; i < movieList.movies.length; i++) {
    const movie = movieList.movies[i];
    try {
      await axios.post(
        'https://cvtub8qk88.execute-api.ap-south-1.amazonaws.com/dev/movie',
        movie,
      );
      console.log('inserted movie ==> ' + movie.id);
    } catch (error) {
      console.log('ee => ', error.message);
    }
  }
})();
// movieList.movies.map(async (movie) => {
//   try {
//     await axios.post(
//       'https://cvtub8qk88.execute-api.ap-south-1.amazonaws.com/dev/movie',
//       movie,
//     );
//   } catch (error) {
//     console.log('ee => ', error.message);
//   }
// });

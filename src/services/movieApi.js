const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const cleanData = data.map((movie) => {
        return {
          poster: movie.poster,
          name: movie.movie,
          line: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
          id: movie.movie,
        };
      });

      return cleanData;
    });
};

export default callToApi;

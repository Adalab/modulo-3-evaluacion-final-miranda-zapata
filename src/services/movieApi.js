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
          // Reemplazamos (todos) los espacios por guiones (con replaceAll) y con el current_wow_in_movie obtenemos un id realmente único para cada película
          id: movie.movie.replaceAll(' ', '_') + movie.current_wow_in_movie,
          // EJERCICIO: CLIP DE VIDEO
          video: movie.video['720p'],
        };
      });

      return cleanData;
    });
};

export default callToApi;

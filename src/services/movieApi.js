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
          // Reemplazamos (TODOS) los espacios por guiones y con el current wow in movie obtenemos un ID SUPER UNICO
          id: movie.movie.replaceAll(' ', '_') + movie.current_wow_in_movie,
        };
      });

      return cleanData;
    });
};

export default callToApi;

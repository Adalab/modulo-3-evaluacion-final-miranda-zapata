import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieElements = props.MovieSceneList.map((movieScene, index) => {
    return (
      <li className='movie' key={index}>
        <MovieSceneItem MovieSceneItem={movieScene} />
      </li>
    );
  });

  return (
    <section>
      <ul className='movies'>{movieElements}</ul>
    </section>
  );
}

export default MovieSceneList;

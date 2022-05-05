import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieElements = props.MovieSceneList.map((movieScene) => {
    return (
      <li className='movie' key={movieScene.id}>
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

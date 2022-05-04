import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieElements = props.MovieSceneList.map((movieScene) => {
    return (
      <li className='movieCard' key={movieScene.id}>
        <MovieSceneItem MovieSceneItem={movieScene} />
      </li>
    );
  });

  return (
    <section>
      <ul className='movieCards'>{movieElements}</ul>
    </section>
  );
}

export default MovieSceneList;

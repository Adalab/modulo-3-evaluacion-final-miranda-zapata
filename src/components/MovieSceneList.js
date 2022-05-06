import MovieSceneItem from './MovieSceneItem';
import '../styles/layout/MovieSceneList.scss';

function MovieSceneList(props) {
  if (props.MovieSceneList.length === 0) {
    return (
      <p>There are no movies with those search terms! Please, try again</p>
    );
  } else {
    const movieElements = props.MovieSceneList.map((movieScene, index) => {
      return (
        <li className='movie__listItem' key={index}>
          <MovieSceneItem MovieSceneItem={movieScene} />
        </li>
      );
    });

    return (
      <section className='movie__container'>
        <ul className='movie__list'>{movieElements}</ul>
      </section>
    );
  }
}

export default MovieSceneList;

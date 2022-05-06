import '../styles/layout/MovieSceneItem.scss';
import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
  return (
    <div className='movie__card'>
      <Link to={`/movie/${props.MovieSceneItem.id}`}>
        <img
          className='movie__poster'
          alt={props.MovieSceneItem.name}
          title={props.MovieSceneItem.name}
          src={props.MovieSceneItem.poster}
        />
        <h3 className='movie__title'>{props.MovieSceneItem.name}</h3>
        <p className='movie__line'>{props.MovieSceneItem.line}</p>
        <p className='movie__year'>{props.MovieSceneItem.year}</p>
      </Link>
    </div>
  );
}

export default MovieSceneItem;

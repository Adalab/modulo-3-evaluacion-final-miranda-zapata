import '../styles/MovieSceneItem.scss';

function MovieSceneItem(props) {
  return (
    <a href='#'>
      <img
        className='movie__poster'
        alt={props.MovieSceneItem.name}
        title={props.MovieSceneItem.name}
        src={props.MovieSceneItem.poster}
      />
      <h3 className='movie__title'>{props.MovieSceneItem.name}</h3>
      <p className='movie__line'>{props.MovieSceneItem.line}</p>
      <p className='movie__year'>{props.MovieSceneItem.year}</p>
    </a>
  );
}

export default MovieSceneItem;

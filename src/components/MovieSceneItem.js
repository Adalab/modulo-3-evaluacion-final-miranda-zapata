import '../styles/MovieSceneItem.scss';

function MovieSceneItem(props) {
  return (
    <a href='#'>
      <img
        className='movieCard__poster'
        alt={props.MovieSceneItem.name}
        title={props.MovieSceneItem.name}
        src={props.MovieSceneItem.poster}
      />
      <h3 className='movieCard__title'>{props.MovieSceneItem.name}</h3>
      <p className='movieCard__line'>{props.MovieSceneItem.line}</p>
      <p className='movieCard__description'>{props.MovieSceneItem.year}</p>
    </a>
  );
}

export default MovieSceneItem;

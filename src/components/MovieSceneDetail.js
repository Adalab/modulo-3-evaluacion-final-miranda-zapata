function MovieSceneDetail(props) {
  return (
    <section className='movie__detail'>
      <img
        className='movie__poster'
        alt={props.MovieSceneItem.name}
        title={props.MovieSceneItem.name}
        src={props.MovieSceneItem.poster}
      />
      <h3 className='movie__line'>{props.MovieSceneItem.line}</h3>
      <p className='movie__title'>From {props.MovieSceneItem.name}</p>
      <p className='movie__director'>
        Directed by {props.MovieSceneItem.director}
      </p>
      <a
        className='movie__clip'
        href={props.MovieSceneItem.audio}
        title='Listen to this wow!'
        target='_blank'
      >
        Audio clip
      </a>
    </section>
  );
}

export default MovieSceneDetail;

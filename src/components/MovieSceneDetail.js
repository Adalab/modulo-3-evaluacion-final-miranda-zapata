import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function MovieSceneDetail(props) {
  // Condicional para que la ruta /movie/mELoInvEnTo me lleve al mensaje de error (si no, el mensaje saldría en /mELoInvEnTo directamente, no en /movie/mELoInvEnTo
  if (props.MovieSceneItem === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <section className='detail__movie'>
        <img
          className='detail__poster'
          alt={props.MovieSceneItem.name}
          title={props.MovieSceneItem.name}
          src={props.MovieSceneItem.poster}
        />
        <h3 className='detail__line'>{props.MovieSceneItem.line}</h3>
        <p className='detail__title'>From {props.MovieSceneItem.name}</p>
        <p className='detail__director'>
          Directed by {props.MovieSceneItem.director}
        </p>
        <p>
          <a
            className='detail__clip'
            href={props.MovieSceneItem.audio}
            title='Listen to this wow!'
            target='_blank'
            rel='noopener noreferrer'
          >
            Audio clip
          </a>
        </p>

        <p>
          <Link
            to='/'
            className='detail__returnLink'
            title='Return to homepage'
          >
            Go back
          </Link>
        </p>
      </section>
    );
  }
}

export default MovieSceneDetail;

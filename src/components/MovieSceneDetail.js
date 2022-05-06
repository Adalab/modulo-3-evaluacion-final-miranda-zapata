import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function MovieSceneDetail(props) {
  // Condicional para que la ruta /movie/mELoInvEnTo me lleve al mensaje de error (si no, el mensaje saldría en /mELoInvEnTo directamente, no en /movie/mELoInvEnTo
  if (props.MovieSceneItem === undefined) {
    return <PageNotFound />;
  } else {
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
        <p>
          <a
            className='movie__clip'
            href={props.MovieSceneItem.audio}
            title='Listen to this wow!'
            target='_blank'
          >
            Audio clip
          </a>
        </p>

        <p>
          <Link to='/' className='movie__returnBtn' title='Return to homepage'>
            Go back
          </Link>
        </p>
      </section>
    );
  }
}

export default MovieSceneDetail;

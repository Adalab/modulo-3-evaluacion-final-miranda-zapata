import '../styles/layout/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function MovieSceneDetail(props) {
  // Condicional para que la ruta /movie/mELoInvEnTo me lleve al mensaje de error (si no, el mensaje saldría en /mELoInvEnTo directamente, no en /movie/mELoInvEnTo
  if (props.MovieSceneItem === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <section className='detail'>
        <img
          className='detail__poster'
          alt={props.MovieSceneItem.name}
          title={props.MovieSceneItem.name}
          src={props.MovieSceneItem.poster}
        />

        <div className='detail__container'>
          <h3 className='detail__line'>{props.MovieSceneItem.line}</h3>
          <p className='detail__title'>
            <i className='detail__icon fas fa-tv'></i> From{' '}
            {props.MovieSceneItem.name}
          </p>
          <p className='detail__director'>
            <i className='detail__icon fas fa-video'></i> Directed by{' '}
            {props.MovieSceneItem.director}
          </p>
          <p className='detail__clip'>
            <a
              className='detail__clip'
              href={props.MovieSceneItem.audio}
              title='Listen to this wow!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='detail__icon fas fa-headphones'></i> Audio clip
            </a>
          </p>

          {/* EJERCICIO: AÑADIR UN ENLACE A LA ESCENA EN VÍDEO */}
          <p className='detail__video'>
            <a
              className='detail__video'
              href={props.MovieSceneItem.video}
              title='Watch the movie clip!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='detail__icon far fa-eye'></i> Watch video
            </a>
          </p>
          {/* EJERCICIO: CLIP DE VIDEO */}

          <p className='detail__returnLink'>
            <Link
              to='/'
              className='detail__returnLink'
              title='Return to homepage'
            >
              <i className='detail__icon fas fa-reply'></i>{' '}
              <em className='detail__returnLink'>Wow</em> back
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

export default MovieSceneDetail;

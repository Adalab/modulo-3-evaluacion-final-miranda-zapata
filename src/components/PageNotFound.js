import '../styles/PageNotFound.scss';
import owenNotFound from '../images/owen-notFound.png';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className='notFound'>
      <img
        className='notFound__image'
        alt='Cant find this wow'
        title='Page not found!'
        src={owenNotFound}
      />

      <Link to='/' className='notFound__returnLink' title='Return to homepage'>
        <i className='notFound__icon fas fa-reply'></i> Back to homepage
      </Link>
    </section>
  );
}

export default PageNotFound;

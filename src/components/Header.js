import '../styles/layout/Header.scss';
import wowenwilson from '../images/wowen-wilson.png';

function Header() {
  return (
    <>
      <header className='header'>
        <img
          className='header__image'
          alt='WOWen Wilson'
          title='WOWen Wilson'
          src={wowenwilson}
        />
        <h1 className='header__title'>Owen Wilson's WOWs in movies</h1>
        <p className='header__credits'>
          Starring Owen Wilson | Featuring Owen Wilson | Special guest star Owen
          Wilson
        </p>
        <p className='header__credits--more'>
          Find more about Owen Wilson at{' '}
          <a
            className='header__link'
            href='https://www.imdb.com/name/nm0005562/'
            target='_blank'
            rel='noopener noreferrer'
          >
            IMDB
          </a>{' '}
          and{' '}
          <a
            className='header__link'
            href='https://es.wikipedia.org/wiki/Owen_Wilson'
            target='_blank'
            rel='noopener noreferrer'
          >
            Wikipedia
          </a>
          .
        </p>
      </header>
    </>
  );
}
export default Header;

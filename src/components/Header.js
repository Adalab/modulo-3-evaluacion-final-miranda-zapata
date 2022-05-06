import '../styles/layout/Header.scss';

function Header() {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>WOWen Wilson!</h1>
        <h3>Owen Wilson's WOWs in movies</h3>
        <img
          className='header__image'
          alt='WOWen Wilson'
          title='WOWen Wilson'
        />
        <p className='header__credits'>
          Starring Owen Wilson | Featuring Owen Wilson |Special guest star Owen
          Wilson
        </p>
      </header>
    </>
  );
}
export default Header;

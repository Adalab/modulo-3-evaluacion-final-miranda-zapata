import '../styles/layout/Header.scss';

function Header() {
  return (
    <>
      <header className='header'>
        {/* <img
          className='header__image'
          alt='WOWen Wilson'
          title='WOWen Wilson'
        /> */}
        <h1 className='header__title'>(Wow)en Wilson</h1>
        <p className='header__text'>Owen Wilson's WOWs in movies</p>
        <p className='header__credits'>
          Starring Owen Wilson | Featuring Owen Wilson | Special guest star Owen
          Wilson
        </p>
      </header>
    </>
  );
}
export default Header;

import '../styles/layout/Footer.scss';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <p className='footer__credits'>
          Coded and styled by{' '}
          <a
            className='footer__link'
            href='https://github.com/miranda-zapata'
            target='_blank'
            rel='noopener noreferrer'
          >
            C Miranda Zapata
          </a>{' '}
        </p>
        <small className='footer__disclaimer'>
          API by{' '}
          <a
            className='footer__link'
            href='https://amamenko.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Avi Mamenko.
          </a>{' '}
          Inspiration for structure from Tim Holman and Tobias van Schneider's{' '}
          <a
            className='footer__link--uppercase'
            href='http://wowenwilsonquiz.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            The Wow'en Wilson Quiz
          </a>
        </small>
      </footer>
    </>
  );
}
export default Footer;

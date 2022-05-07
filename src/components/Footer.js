import '../styles/layout/Footer.scss';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <p className='footer__credits'>
          Coded and styled by <span>C Miranda Zapata</span>
        </p>

        <p className='footer__credits'>
          Find me on{' '}
          <a
            className='footer__menuLink'
            href='https://github.com/miranda-zapata'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='footer__menuIcon fab fa-github'></i>
          </a>{' '}
          <a
            className='footer__menuLink'
            href='https://www.linkedin.com/in/claramirandazapata/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='footer__menuIcon fab fa-linkedin-in'></i>
          </a>
        </p>

        <p className='footer__disclaimer'>
          <small>
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
        </p>
      </footer>
    </>
  );
}
export default Footer;

import '../styles/layout/Footer.scss';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <small className='footer__credits'>
          Coded and styled by
          <a
            className='footer__link'
            href='https://github.com/miranda-zapata'
            target='_blank'
            rel='noopener noreferrer'
          >
            C Miranda Zapata
          </a>
        </small>
      </footer>
    </>
  );
}
export default Footer;

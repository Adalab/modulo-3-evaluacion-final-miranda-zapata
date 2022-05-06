import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <h3>Error 404. Page not found</h3>
      <p>
        <Link to='/' className='movie__returnBtn' title='Return to homepage'>
          Back to homepage
        </Link>
      </p>
    </>
  );
}

export default PageNotFound;

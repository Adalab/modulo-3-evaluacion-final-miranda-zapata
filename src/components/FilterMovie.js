import '../styles/layout/FilterMovie.scss';

function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    // Para prevenir la recarga ev.preventDefault(); Finalmente usado en App.js con una función preventSubmitName, línea 58
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <fieldset className='movie'>
      <label className='movie__label' htmlFor='mname'>
        Movie
      </label>
      <input
        type='search'
        className='movie__input'
        name='mname'
        id='mname'
        placeholder='Search by movie name'
        onChange={handleChangeMovie}
        value={props.filterMovie}
      />
    </fieldset>
  );
}

// Estas son las default props
/* FilterMovie.defaultProps = {
  inputType: 'text',
}; */

export default FilterMovie;

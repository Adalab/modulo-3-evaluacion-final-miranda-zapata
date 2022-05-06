function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <fieldset className='movie__filter'>
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

export default FilterMovie;

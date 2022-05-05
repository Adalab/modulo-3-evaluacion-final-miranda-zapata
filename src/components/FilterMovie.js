function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <fieldset className=''>
      <label htmlFor='mname'>Movie</label>
      <input
        type='search'
        className='input__search'
        name='mname'
        id='mname'
        placeholder='Search by movie name'
        onChange={handleChangeMovie}
      />
    </fieldset>
  );
}

export default FilterMovie;

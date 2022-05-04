function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <fieldset>
      <label htmlFor='mname'>Movie</label>
      <input
        type='search'
        className=''
        name='mname'
        id='mname'
        placeholder='Search by movie name'
        onChange={handleChangeMovie}
      />
    </fieldset>
  );
}

export default FilterMovie;

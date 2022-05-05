function FilterYear(props) {
  const handleChangeYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option value={year} key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <fieldset className=''>
      <label htmlFor='myear'>Year</label>
      <select
        className='search__year'
        name='myear'
        id='myear'
        onChange={handleChangeYear}
        value={props.filterYear}
      >
        <option value='all'>All</option>
        {renderYears()}
      </select>
    </fieldset>
  );
}

export default FilterYear;

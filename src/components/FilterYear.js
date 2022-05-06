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
    <fieldset className='year__filter'>
      <label className='year__label' htmlFor='myear'>
        Year
      </label>
      <select
        className='year__select'
        name='myear'
        id='myear'
        onChange={handleChangeYear}
        value={props.filterYear}
      >
        <option className='year__option' value='all'>
          All
        </option>
        {renderYears()}
      </select>
    </fieldset>
  );
}

export default FilterYear;

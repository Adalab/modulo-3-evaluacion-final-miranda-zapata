import '../styles/layout/FilterYear.scss';

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
    <fieldset className='year'>
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
        <option value='all'>All</option>
        {renderYears()}
      </select>
    </fieldset>
  );
}

export default FilterYear;

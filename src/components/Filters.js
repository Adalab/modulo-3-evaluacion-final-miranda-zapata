import '../styles/layout/Filters.scss';
import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import ResetButton from './ResetButton';

function Filters(props) {
  return (
    <section className='filters'>
      <form className='filters__form' onSubmit={props.preventSubmitName}>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          years={props.years}
          handleFilterYear={props.handleFilterYear}
          filterYear={props.filterYear}
        />
        <ResetButton resetInputs={props.resetInputs} />
      </form>
    </section>
  );
}

export default Filters;

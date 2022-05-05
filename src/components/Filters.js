import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className=''>
      <form onSubmit={props.preventSubmitName}>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          years={props.years}
          handleFilterYear={props.handleFilterYear}
          filterYear={props.filterYear}
        />
      </form>
    </section>
  );
}

export default Filters;

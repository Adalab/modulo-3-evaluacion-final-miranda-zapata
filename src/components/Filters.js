import FilterMovie from './FilterMovie';

function Filters(props) {
  return (
    <section className=''>
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />

        {/* <FilterMovieYear handleFilterYear={handleFilterYear} /> */}
      </form>
    </section>
  );
}

export default Filters;

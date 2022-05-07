import '../styles/layout/ResetButton.scss';

const ResetButton = (props) => {
  const handleResetButton = (ev) => {
    props.resetInputs();
  };
  return (
    <button className='resetBtn' onClick={handleResetButton}>
      Reset
    </button>
  );
};
export default ResetButton;

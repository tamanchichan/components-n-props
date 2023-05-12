import { FaStar } from 'react-icons/fa';

function Star(props) {
  return (
    <FaStar
      onClick={props.handleRate}
    />
  );
};

export default Star;
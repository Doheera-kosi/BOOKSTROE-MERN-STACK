import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

// Define prop types for the BackButton component
BackButton.propTypes = {
  destination: PropTypes.string // Define destination prop type as string
};

export default BackButton;

import PropTypes from 'prop-types';

const Button = ({ full, text, color, onClick ,size }) => {
  const colorClass = full ? 'bg-blue-500' : 'bg-transparent ';
  const hoverClass = full ? 'hover:bg-blue-700' : 'hover:bg-gray-200';

  return (
    <button
      className={`inline-flex justify-center py-2 px-4 rounded-lg font-inter font-xs text-${size} ${color} ${colorClass} ${hoverClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Add',
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

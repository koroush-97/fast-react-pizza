import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

function LinkButton({ children, to }) {
  return (
    <Link to={to} className="text-sm text-blue-500 hover:text-blue-800">
      {children}
    </Link>
  );
}

export default LinkButton;

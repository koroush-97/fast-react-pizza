import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return <Link to="/order/new">{children}</Link>;
}

export default LinkButton;

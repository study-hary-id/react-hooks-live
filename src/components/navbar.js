import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ links }) {
  const navLinks = links.map((link, key) => (
    <li key={key}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>{navLinks}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
};

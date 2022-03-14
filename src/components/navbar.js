import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar({ links }) {
  const navLinks = links.map((link, key) => (
    <li
      key={key}
      className="mr-6 font-semibold text-blue-900 hover:text-blue-600">
      <NavLink
        to={link.path}
        // Add condition because activeClassName doesn't work.
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
      >{link.name}</NavLink>
    </li>
  ));

  return (
    <nav className="bg-gray-200 p-4 mb-4">
      <ul className="flex container mx-auto">{navLinks}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
};

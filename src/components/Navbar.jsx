import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <li>
          <Link to="/employeeslist">Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

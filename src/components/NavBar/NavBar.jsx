import { Link } from "react-router-dom";
import logo from '../../assets/svgs/logo.svg'

export default function NavBar() {
  const links = [
    <Link key={1} className="nav-link page page--active" to="/">
      Landing
    </Link>,
    <Link key={2} className="nav-link page page--active" to="/artists">
      Artists
    </Link>,
    <Link key={3} className="nav-link page page--active" to="/piercer">
      Piercer
    </Link>,
    <Link key={4} className="nav-link page page--active" to="/contact">
      Contact
    </Link>,
    <Link key={5} className="nav-link page page--active" to="/location">
      Location
    </Link>,
  ];
  return (
    <nav id="header" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={logo} className="logo" alt="logo" />
        <h1 id="nameTitle">
          Be True Tattoo
        </h1>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            {links.map((link) => (
              <li key={link.key} className="nav-item">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

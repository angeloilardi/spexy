import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary border">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          SPEXY
        </NavLink>
        {/* <a className="navbar-brand" href="#">
          SPEXY
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="glasses" className="nav-link">
                Glasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="sunglasses" className="nav-link">
                Sunglasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="tests" className="nav-link">
                Eye Tests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contacts" className="nav-link">
               Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

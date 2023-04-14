import { NavLink } from "react-router-dom";
import { useRef } from "react";
export default function Navbar() {
    const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
      navButton.current.classList.add("collapsed");
      linksContainerRef.current.classList.remove("show");
    }
  return (
    <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary border">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              SPEXY <i class="bi bi-eyeglasses"></i>
            </NavLink>
            {/* <a className="navbar-brand" href="#">
              SPEXY
            </a> */}
            <button
              ref={navButton}
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
            <div
              ref={linksContainerRef}
              className="collapse navbar-collapse"
              id="navbarText"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink onClick={collapseNav} to="glasses" className="nav-link">
                    Glasses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={collapseNav}
                    to="sunglasses"
                    className="nav-link"
                  >
                    Sunglasses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={collapseNav} to="tests" className="nav-link">
                    Eye Tests
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={collapseNav}  to="contacts" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

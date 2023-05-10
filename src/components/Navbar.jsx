import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./../App.css";
export default function Navbar() {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top navbar-expand-lg bg-white bg-gradient border">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand fw-semibold">
            SPEXY <i class="bi bi-eyeglasses"></i>
          </NavLink>

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
                <NavLink
                  onClick={collapseNav}
                  to="glasses"
                  className="nav-link"
                >
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
                <NavLink onClick={collapseNav} to="stores" className="nav-link">
                  Our Stores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link snipcart-checkout snipcart-summary"
                  onClick={collapseNav}
                >
                  <i class="bi bi-bag-fill"></i>
                  <strong className="sr-only"> Cart </strong>
                  <span className="snipcart-total-price">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(total)}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

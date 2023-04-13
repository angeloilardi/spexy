export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          SPEXY
        </a>
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
              <a className="nav-link" href="#">
                Glasses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sunglasses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Eye Tests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

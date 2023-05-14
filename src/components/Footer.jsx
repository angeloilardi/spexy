export default function Footer() {
  return (
    <div className="container-fluid mt-auto vw-100">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top px-4 text-dark">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 ">© 2023 SPEXY by Angelo Ilardi</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pe-4">
          <li className="ms-3">
            <a className="text-dark" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-dark" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-dark" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

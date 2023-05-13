export default function Footer() {
  return (
    <div className="container-fluid pt-5 mt-auto vw-100">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top px-4">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2023 SPEXY by helldorado82
          </span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

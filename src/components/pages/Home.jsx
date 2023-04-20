import '../../styles/pages.css'

export default function Home() {
  return (
    <div id="carouselExample" class="carousel carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            alt="man with sunglasses"
          />
          <div class="carousel-caption">
            <h4 className="text-black bg-light bg-gradient d-inline">NEW IN</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.pexels.com/photos/386410/pexels-photo-386410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            alt="sunglasses on a field"
          />
          <div class="carousel-caption">
            <h4 className="text-black bg-light bg-gradient d-inline">
              WHERE WILL THIS SUMMER TAKE YOU?
            </h4>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="d-block w-100"
            alt="an open drawer with some some pairs of glasses"
          />
          <div class="carousel-caption">
            <h4 className="text-black bg-light bg-gradient d-inline">
              EXPLORE THE NEW COLLECTION
            </h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
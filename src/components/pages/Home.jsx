import '../../styles/pages.css'

export default function Home() {
  return (
    <div className="d-flex flex-row wv-100 hv-100 pt-5">
      <div>
        <img
          src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          alt="man with sunglasses"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          alt="man with sunglasses"
        />
      </div>
    </div>
    // <div className="container-fluid home pt-2 vw-100">
    //   <div className="row pt-5">
    //     <div className="col-6 g-0">
    //       <img
    //         src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         className="img-fluid"
    //         alt="man with sunglasses"
    //       />
    //     </div>
    //     <div div className="col-6 g-0">
    //       <img
    //         src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         className="img-fluid"
    //         alt="sunglasses on a field"
    //       />
    //     </div>
    //   </div>

    //   <div
    //     id="carouselExample"
    //     className="carousel position-absolute top-50 start-50 translate-middle carousel-fade"
    //   >
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img
    //           src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           className="d-block w-100 h-auto"
    //           alt="man with sunglasses"
    //         />
    //         <div className="carousel-caption">
    //           <h2 className="text-black bg-light bg-gradient d-inline">
    //             NEW IN
    //           </h2>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           src="https://images.pexels.com/photos/386410/pexels-photo-386410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           className="d-block w-100"
    //           alt="sunglasses on a field"
    //         />
    //         <div className="carousel-caption">
    //           <h2 className="text-black bg-light bg-gradient d-inline">
    //             WHERE WILL THIS SUMMER TAKE YOU?
    //           </h2>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //           className="d-block w-100"
    //           alt="an open drawer with some some pairs of glasses"
    //         />
    //         <div className="carousel-caption">
    //           <h2 className="text-black bg-light bg-gradient d-inline">
    //             EXPLORE THE NEW COLLECTION
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  );
}
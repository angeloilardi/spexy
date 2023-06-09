import Form from "../Form";

export default function Tests() {
  return (
    <div className="container">
      <div className="row bg-black align-items-center ">
        <div className="col-lg-6 my-3 order-last order-lg-first text-white">
          <h2 className="mb-4 fst-italic">Book a free eye test</h2>
          <h3>
            We offer free eye tests with in-house opticians and optometrists in
            all our stores. If your eyes are due for a check-up or you notice
            any symptoms, we’re happy to help you out.
          </h3>
          
            <a className="mt-4 btn btn-light" href="#form" role="button">
              BOOK HERE
            </a>
          
        </div>
        <div className="col-lg-6 p-0 m-0 order-md-first">
          <img
            className="img-fluid object-fit-cover"
            src="https://images.pexels.com/photos/5765830/pexels-photo-5765830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      <Form />
    </div>
  );
}

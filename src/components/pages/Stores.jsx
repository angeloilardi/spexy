import StoresMap from "./StoresMap";

export default function Stores() {
    return (
      <div className="container">
        <div className="row mt-2 p-4 align-items-center">
          <div className="col-lg-5 col-md-6">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/5201901/pexels-photo-5201901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="glasses store"
            />
          </div>
          <div className="col-md-6 p-2">
            <p>
              Visit out store today to choose from a wide variety of frames the
              one that suists you best. <br />
              Are you looking for a pair that matches well with pretty much
              anything? Or you're considering to get a pair for every
              mood/style/state of mind? <br />
              Whatever you have in mind, our staff in store will guide you
              (gently, we're not pushy) into finding a match made in heaven.
            </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-sm-6 col-xs-7">
            <p>Our Opening hours are:</p>
            <ul className="list-unstyled">
              <li>Monday: 10 - 19</li>
              <li>Tuesday: 10 - 19</li>
              <li>Wednesday: 10 - 19</li>
              <li>Thirsday: 10 - 19</li>
              <li>Friday: 10 - 19</li>
              <li>Saturday: 10 - 21</li>
              <li>Sunday: 11 - 17</li>
            </ul>
          </div>
          <div className="col-sm-6 col-xs-5">
            <StoresMap />
          </div>
        </div>
      </div>
    );
    
    
    
}
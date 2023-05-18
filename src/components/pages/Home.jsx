import "../../styles/pages.css";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div className="d-flex flex-row wv-100 pt-5">
      <HashLink to="/sunglasses#shop">
        <div className="position-relative home">
          <img
            src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
            alt="man with sunglasses"
          />
          <div className="position-absolute bottom-0 start-0 pb-5 ps-2">
            <h2 className="text-black bg-light bg-gradient">
              NEW IN SUNGLASSES
            </h2>
          </div>
        </div>
      </HashLink>
      <HashLink to="/glasses#shop">
        <div className="position-relative home">
          <img
            src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
            alt="glasses in a drawer"
          />
          <div className="position-absolute bottom-0 start-0 pb-5 ps-2">
            <h2 className="text-black bg-light bg-gradient">
              EXPLORE OUR GLASSES COLLECTION
            </h2>
          </div>
        </div>
      </HashLink>
    </div>
  );
}

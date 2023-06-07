import "../../styles/pages.css";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div className="d-flex flex-row wv-100 pt-5">
      <div className="position-relative home">
        <img
          src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg"
          style={{ objectFit: "cover", width: "100%", height: "100svh" }}
          alt="man with sunglasses"
        />
        <div className="position-absolute bottom-0 start-0 pb-5 ps-2">
          <HashLink to="/sunglasses#shop">
            <h2 className="text-black bg-light bg-gradient">
              NEW IN SUNGLASSES
            </h2>
          </HashLink>
        </div>
      </div>

      <div className="position-relative home">
        <img
          src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg"
          style={{ objectFit: "cover", width: "100%", height: "100svh" }}
          alt="glasses in a drawer"
        />
        <div className="position-absolute bottom-0 start-0 pb-5 ps-2">
          <HashLink to="/glasses#shop">
            <h2 className="text-black bg-light bg-gradient">
              EXPLORE OUR GLASSES COLLECTION
            </h2>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

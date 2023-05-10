import { Fade } from "react-awesome-reveal";
import sunglasses from "./../../data/sunglasses-data.json";
import "../../styles/pages.css";

export default function Sunglasses() {
  return (
    <div className="container pt-5 ">
      <div className="row">
        {sunglasses.map((card) => {
          return (
            <div className="col-lg-4 tile" key={card.id}>
              <div className="border position-relative p-1">
                <Fade delay={300}>
                  <img
                    className="img-fluid border-black card-img"
                    src={card.url}
                    alt=""
                  />
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <h2 className="text-black bg-light bg-gradient">
                      {card.caption.toUpperCase()}
                    </h2>
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

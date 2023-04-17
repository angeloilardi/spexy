import { Fade, Slide } from "react-awesome-reveal";
import glasses from './../../data/data.json'

export default function Glasses() {
  return (
    <div className="container-fluid pt-5 ">
      <div className="row">
        {glasses.map((card) => {
          return (
            <div className="col-lg-4" key={card.id}>
              <div className="border position-relative p-1">
                <Fade delay={300}>
                  <img
                    className="img-fluid border-black card-img"
                    src={card.url}
                    alt=""
                  />
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <h2 className="text-black bg-light bg-gradient">{ card.caption.toUpperCase()}</h2>
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

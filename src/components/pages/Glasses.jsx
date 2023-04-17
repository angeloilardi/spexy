import { Fade, Slide } from "react-awesome-reveal";
import glasses from './../../data/data.json'

export default function Glasses() {
  return (
    <div className="container pt-5">
      <div className="row">
        {glasses.map((card) => {
          return (
            <div className="col-lg-4" key={card.id}>
              <div className="border">
                <Fade delay={300}>
                  <img
                    className="img-fluid border-black card-img opacity-75"
                    src={card.url}
                    alt=""
                  />
                  <div className="position-relative top-0 start-0">
                    <h2 className=" text-dark">FIND THE PERFECT FIT</h2>
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

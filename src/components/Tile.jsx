import { Fade } from "react-awesome-reveal";
export default function Tile({ id, url, caption }) {
  return (
    
      <div className="col-lg-4 tile" key={id}>
        <div className="border position-relative p-1">
          <Fade delay={300}>
            <img className="img-fluid border-black card-img" src={url} alt="" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <h2 className="text-black bg-light bg-gradient">
                {caption.toUpperCase()}
              </h2>
            </div>
          </Fade>
        </div>
      </div>
 
  );
}

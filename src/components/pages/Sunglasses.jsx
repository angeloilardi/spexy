import { Fade } from "react-awesome-reveal";
import sunglasses from "./../../data/sunglasses-data.json";
import "../../styles/pages.css";
import products from "../../data/products.json";

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
      <hr />
      <div className="container pt-5">
        <h3>Our Sunglasses</h3>
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="card col-lg-4">
                <img src={product.img} class="card-img-top" alt="..."></img>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button
                    className="buy-button snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.img}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

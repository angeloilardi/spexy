
import sunglasses from "./../../data/sunglasses-data.json";
import "../../styles/pages.css";
import products from "../../data/products.json";
import Tile from "../Tile";

export default function Sunglasses() {
  return (
    <div className="container pt-5">
      <div className="row">
        {sunglasses.map((card) => {
          return <Tile id={card.id} url={card.url} caption={card.caption} />;
        })}
      </div>
      <hr />

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
  );
}

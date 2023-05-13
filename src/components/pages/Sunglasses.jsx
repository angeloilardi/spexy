
import sunglasses from "./../../data/sunglasses-tiles.json";
import "../../styles/pages.css";
import sunglassesItems from "../../data/sunglasses-items.json";
import Tile from "../Tile";
import Item from "../Item";

export default function Sunglasses() {
  return (
    <div className="container pt-5">
      <div className="row p-4">
        {sunglasses.map((card) => {
          return <Tile id={card.id} url={card.url} caption={card.caption} />;
        })}
      </div>
      <hr />

      <div className="row p-4">
        <h3>Our Sunglasses</h3>
        <div className="row">
          {sunglassesItems.map((product) => {
            return (
              <Item
                id={product.id}
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Tile from "../Tile";
import glasses from "./../../data/glasses-tiles.json";
import "../../styles/pages.css";
import glassesItems from "./../../data/glasses-items.json";
import Item from "../StoreItem";

export default function Glasses() {
  return (
    <div className="container pt-5 ">
      <div className="row p-4">
        {glasses.map((card) => {
          return <Tile key={card.id} url={card.url} caption={card.caption} />;
        })}
      </div>
      <hr />

      <div className="row p-4" id="shop">
        <h3 className="mt-5">Our Glasses</h3>
        <div className="row">
          {glassesItems.map((product) => {
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

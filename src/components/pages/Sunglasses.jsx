import sunglasses from "./../../data/sunglasses-tiles.json";
import "../../styles/pages.css";
import sunglassesItems from "../../data/sunglasses-items.json";
import Tile from "../Tile";
import StoreItem from "../StoreItem";
import { useRef } from "react";

export default function Sunglasses() {
  const shop = useRef(null);
  return (
    <div className="container pt-5">
      <div className="row p-4">
        {sunglasses.map((card) => {
          return <Tile
            key={card.id}
            url={card.url}
            caption={card.caption} />;
        })}
      </div>
      <hr />

      <div className="row p-4" id="shop">
        <h3 className="mt-5">Our Sunglasses</h3>
        <div className="row">
          {sunglassesItems.map((product) => {
            return (
              <StoreItem
                key={product.id}
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

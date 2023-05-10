import Tile from "../Tile";
import glasses from "./../../data/glasses-data.json";
import "../../styles/pages.css";

export default function Glasses() {
  return (
    <div className="container pt-5 ">
      <div className="row">
        {glasses.map((card) => {
          return <Tile id={card.id} url={card.url} caption={card.caption} />;
        })}
      </div>
    </div>
  );
}
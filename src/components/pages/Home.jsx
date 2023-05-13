import "../../styles/pages.css";

export default function Home() {
  return (
    <div className="d-flex flex-row wv-100 pt-5">
      <div>
        <img
          src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ objectFit: "cover", width: "100%", height: "94vh" }}
          alt="man with sunglasses"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ objectFit: "cover", width: "100%", height: "94vh" }}
          alt="glasses in a drawer"
        />
      </div>
    </div>
  );
}

export default function StoreItem({id, img, title, description, price}) {
    return (
      <div key={id} className="card col-lg-4 align-items-stretch">
        <img
          src={img}
          className="card-img-top img-fluid h-50"
          alt="..."
          style={{ objectFit: "cover" }}
        >
        </img>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>${price}</p>
          <p>
            <button
              className="buy-button snipcart-add-item"
              data-item-id={id}
              data-item-image={img}
              data-item-name={title}
              data-item-price={price}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    );
}
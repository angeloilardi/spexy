export default function Item({id, img, title, description, price}) {
    return (
      <div key={id} className="card col-lg-4 align-items-stretch">
        <img src={img} class="card-img-top h-50 object-fit-fill" alt="..."></img>
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
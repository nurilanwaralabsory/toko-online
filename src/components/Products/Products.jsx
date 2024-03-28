import "./Products.css";

const Products = (props) => {
  const { nama, harga, image, beli } = props;
  return (
    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{nama}</span>
        <h4>
          <a href="">Women leather bag</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="product-bottom-details">
          <div className="product-price">
            Rp{" "}
            {harga.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </div>
          <div className="product-links">
            <button onClick={beli}>Beli</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

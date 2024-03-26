import "./Products.css";

const Products = (props) => {
  const { nama, harga, image, beli } = props;
  return (
    <div className="products">
      <img src={image} alt="product-image" />
      <div className="products-body">
        <h3>{nama}</h3>
        <p>
          Rp{" "}
          {harga.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </p>
        <button onClick={beli}>beli</button>
      </div>
    </div>
  );
};

export default Products;

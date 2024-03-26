const Products = (props) => {
  const { nama, harga, image } = props;
  return (
    <div>
      <img src={image} alt="product-image" />
      <div>
        <h3>{nama}</h3>
        <p>
          Rp{" "}
          {harga.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </p>
        <button href="">beli</button>
      </div>
    </div>
  );
};

export default Products;

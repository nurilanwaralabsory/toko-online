import Products from "../Products/Products";
import kursi from "../../img/kursi.jpeg";
import poco from "../../img/poco.jpeg";
import ssd from "../../img/ssd.jpeg";
import "./Main.css";

const Main = () => {
  const products = [
    {
      nama: "Kursi gaming Fantech",
      harga: 2350000,
      image: kursi,
    },
    {
      nama: "Poco X6 Pro",
      harga: 4999000,
      image: poco,
    },
    {
      nama: "SSD Seagate 1TB Gen 4",
      harga: 2450000,
      image: ssd,
    },
  ];
  return (
    <div className="main">
      {products.map((product) => {
        return (
          <>
            <Products
              nama={product.nama}
              harga={product.harga}
              image={product.image}
              beli={() => alert(`${product.nama} berhasil dibeli`)}
            />
            <br />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Main;

import Products from "./Products";
import kursi from "../img/kursi.jpeg";
import poco from "../img/poco.jpeg";
import ssd from "../img/ssd.jpeg";

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
    <>
      {products.map((product) => {
        return (
          <>
            <Products
              nama={product.nama}
              harga={product.harga}
              image={product.image}
            />
            <br />
            <br />
          </>
        );
      })}
    </>
  );
};

export default Main;

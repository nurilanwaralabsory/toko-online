import Products from "../Products/Products";
import kursi from "../../img/kursi.jpeg";
import poco from "../../img/poco.jpeg";
import ssd from "../../img/ssd.jpeg";
import keyboardFantech from "../../img/keyboard-fantech.jpg";
import keyboard from "../../img/keyboard.jpeg";
import mouseGaming from "../../img/mouse-gaming.jpg";
import mouse from "../../img/mouse.jpg";
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
    {
      nama: "Mouse Razer DeathAdder",
      harga: 5450000,
      image: mouse,
    },
    {
      nama: "Keyboard RedDragon Fizz ky16",
      harga: 500000,
      image: keyboard,
    },
    {
      nama: "Mouse blue LED",
      harga: 2450000,
      image: mouseGaming,
    },
    {
      nama: "keyboard Fantech Atom",
      harga: 3000000,
      image: keyboardFantech,
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

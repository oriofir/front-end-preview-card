import Image from "./images/image-product-desktop.jpg";
import iconCart from "./images/icon-cart.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img className="perfume-image" src={Image} alt="Image" />
        <main className="text">
          <div className="perfume">PERFUME</div>
          <div className="title">
            Gabrielle <br />
            Essence Eau De <br />
            Perfum
          </div>
          <div className="description">
            A floral, solar, and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANNEL.
          </div>
          <div className="price-container">
            <div className="New-price">$149.99</div>
            <div className="Old-price">$169.99</div>
          </div>
          <button className="cart">
            <img className="cart-icon" src={iconCart} alt="icon" /> Add to Cart
          </button>
        </main>
      </div>
    </>
  );
}

export default App;

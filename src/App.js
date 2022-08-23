import logo from "./logo.svg";
import Image from "./images/image-product-desktop.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img src={Image} alt="Image" />
        <main className="text">
          <div className="perfume">Perfume</div>
          <div className="title">Gabrielle Essence Eau De Perfum</div>
          <div className="description">
            A floral, solar, and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANNEL.
          </div>
          <div className="Old-price">$169.99</div>
          <div className="New-price">$149.99</div>
          <button className="cart">Add to Cart</button>
        </main>
      </div>
    </>
  );
}

export default App;

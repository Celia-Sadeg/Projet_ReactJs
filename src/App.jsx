import { useState } from "react";
import SearchBar from "./SearchBar";
import ImageGrid from "./ImageGrid";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter une image au panier
  const addToCart = (image) => {
    setCart([...cart, image]);
  };

  return (
    <div>
      <Cart cart={cart} />
      <SearchBar />
      <ImageGrid addToCart={addToCart} />
    </div>
  );
}

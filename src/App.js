import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import MenuContainer from "./components/MenuContainer/MenuContainer";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [control, setControl] = useState(false);

  const showProducts = (itemActual) => {
    const filterItems = products.filter((item) => {
      return (
        item.name.toUpperCase() === itemActual ||
        item.category.toUpperCase() === itemActual
      );
    });
    setFilteredProducts(filterItems);
    setControl(true);
  };

  const handleClick = (productId, productPrice) => {
    const addItem = products.find((item) => {
      return item.id === productId;
    });
    setCurrentSale([...currentSale, addItem]);

    currentSale.map((item) => {
      return item.id === productId && setCurrentSale([...currentSale]);
    });

    totalPrice(productPrice);

    currentSale.map((item) => {
      return item.id === productId && setCartTotal(cartTotal);
    });
  };

  const totalPrice = (value) => {
    const sum = currentSale.reduce((acc, currentValue) => {
      return acc + currentValue.price;
    }, value);
    setCartTotal(sum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kenzie Burguer's</h1>
      </header>
      <article className="App-content">
        <Filter
          setControl={setControl}
          showProducts={showProducts}
          products={products}
        />
        <MenuContainer
          control={control}
          products={products}
          setProducts={setProducts}
          filteredProducts={filteredProducts}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          handleClick={handleClick}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </article>
    </div>
  );
};

export default App;

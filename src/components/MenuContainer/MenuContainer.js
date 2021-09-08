import "./styles.css";
import icon from "./assets/trolley.gif";
import Product from "../Product/Product";
import CurrentSale from "../CurrentSale/CurrentSale";
import ProductFiltered from "../ProductFiltered/ProductFiltered";

const MenuContainer = ({
  control,
  products,
  filteredProducts,
  currentSale,
  setCurrentSale,
  handleClick,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <>
      <div className="container-vitrine">
        {!control
          ? products.map((item) => {
              return (
                <Product
                  key={item.id}
                  product={item}
                  handleClick={handleClick}
                />
              );
            })
          : filteredProducts.map((item) => {
              return (
                <ProductFiltered
                  key={item.id}
                  filteredProduct={item}
                  handleClick={handleClick}
                />
              );
            })}
      </div>

      <div className="container-subtotal">
        <h2>
          Pedido Total - R$
          {cartTotal.toFixed(2)}
        </h2>
        <button
          className="btn-limpar"
          onClick={() => {
            setCurrentSale([]);
            setCartTotal(0);
          }}
        >
          Limpar Carrinho
        </button>
      </div>

      <div className="title-carrinho">
        <h3>CARRINHO</h3>
        <img src={icon} width="32" height="32" alt="carrinho de compras" />
      </div>

      <div className="container-carrinho">
        {currentSale.map((item) => {
          return <CurrentSale key={item.id} currentSale={item} />;
        })}
      </div>
    </>
  );
};

export default MenuContainer;

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
          ? products.map((item, index) => {
              return (
                <Product key={index} product={item} handleClick={handleClick} />
              );
            })
          : filteredProducts.map((item, index) => {
              return (
                <ProductFiltered
                  key={index}
                  filteredProducts={item}
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

      <div className="container-title">
        <h3>CARRINHO</h3>
        <img src={icon} width="32" height="32" alt="carrinho de compras" />
      </div>

      <div className="container-carrinho">
        {currentSale.map((item, index) => {
          return <CurrentSale key={index} currentSale={item} />;
        })}
      </div>
    </>
  );
};

export default MenuContainer;

import "./styles.css";

const Product = ({ product, handleClick }) => {
  return (
    <>
      <ul>
        <li>{product.name}</li>
        <li>{product.category}</li>
        <li>R$ {product.price}</li>
        <button
          className="btn-add"
          onClick={() => handleClick(product.id, product.price)}
        >
          Adicionar
        </button>
      </ul>
    </>
  );
};

export default Product;

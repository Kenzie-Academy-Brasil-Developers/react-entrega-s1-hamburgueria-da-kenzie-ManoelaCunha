const ProductFiltered = ({ filteredProducts, handleClick }) => {
  return (
    <ul>
      <li>{filteredProducts.name}</li>
      <li>{filteredProducts.category}</li>
      <li>R$ {filteredProducts.price}</li>
      <button
        className="btn-add"
        onClick={() => handleClick(filteredProducts.id, filteredProducts.price)}
      >
        Adicionar
      </button>
    </ul>
  );
};

export default ProductFiltered;

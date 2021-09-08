const ProductFiltered = ({
  filteredProduct: { id, name, category, price },
  handleClick,
}) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{category}</li>
      <li>R$ {price}</li>
      <button className="btn-add" onClick={() => handleClick(id, price)}>
        Adicionar
      </button>
    </ul>
  );
};

export default ProductFiltered;

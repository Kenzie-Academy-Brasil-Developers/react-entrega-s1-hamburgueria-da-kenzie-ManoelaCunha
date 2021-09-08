const CurrentSale = ({ currentSale: { name, category, price } }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{category}</li>
      <li>R$ {price}</li>
    </ul>
  );
};

export default CurrentSale;

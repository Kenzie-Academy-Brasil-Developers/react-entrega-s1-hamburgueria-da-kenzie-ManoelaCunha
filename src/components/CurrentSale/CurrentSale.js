const CurrentSale = ({ currentSale }) => {
  return (
    <ul>
      <li>{currentSale.name}</li>
      <li>{currentSale.category}</li>
      <li>R$ {currentSale.price}</li>
    </ul>
  );
};

export default CurrentSale;

import "./styles.css";
import { useState } from "react";

const Filter = ({ setControl, showProducts, products }) => {
  const [textInput, setTextInput] = useState("");

  return (
    <div className="container-input">
      <input
        type="text"
        value={textInput}
        required
        name={textInput}
        placeholder="Exemplo Big Kenzie... Bebidas..."
        onChange={(event) => setTextInput(event.target.value.toUpperCase())}
      />
      <div className="container-btn">
        <button
          className="btn-pesquisar"
          onClick={(event) => {
            products.map((item) => {
              return textInput.toUpperCase() === item.name.toUpperCase() ||
                textInput.toUpperCase() === item.category.toUpperCase()
                ? showProducts(textInput.toUpperCase())
                : event.stopPropagation();
            });
            setTextInput("");
          }}
        >
          Pesquisar
        </button>
        <button className="btn-voltar" onClick={() => setControl(false)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Filter;

import { useState } from "react";
const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setListTransactions((oldListTransactions) => [
      ...oldListTransactions,
      { description, value, select },
    ]);
    setDescription("");
    setValue("");
    setSelect("");
  }

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="divDescription">
        <p>Descrição</p>
        <input
          className="inputDescription"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="containerValues">
        <div className="divValue">
          <p>Valor</p>
          <div className="divInput">
            <input
              className="inputValue"
              type="number"
              placeholder="1"
              onChange={(event) => setValue(event.target.value)}
            />
            <p>R$</p>
          </div>
        </div>

        <div className="divSelect">
          <label>Tipo de valor:</label>
          <select
            className="selectOptions"
            onChange={(event) => setSelect(event.target.value)}
          >
            <option value="selecione">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button className="buttonInsertValue" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;

import Card from "../Card";
import noCard from "../../noCard.svg";
import { useState } from "react";

const List = ({ listTransactions, setListTransactions, handleDelete }) => {
  const [filtered, setFiltered] = useState(false);
  const [listFiltered, setListFiltered] = useState([...listTransactions]);

  function handleFilter(botao) {
    botao !== "todos" ? setFiltered(true) : setFiltered(false);

    setListFiltered(
      listTransactions.filter((transaction) => transaction.select === botao)
    );
  }

  return (
    <>
      <div>
        <div className="listContainer">
          <div className="listHeader">
            <h3>Resumo Financeiro</h3>
            <div className="listButtons">
              <button
                value={"todos"}
                className="buttonAll"
                onClick={() => handleFilter("todos")}
              >
                Todos
              </button>
              <button
                value={"Entrada"}
                className="buttonIn"
                onClick={() => handleFilter("Entrada")}
              >
                Entradas
              </button>
              <button
                value={"Despesa"}
                className="buttonOut"
                onClick={() => handleFilter("Despesa")}
              >
                Despesas
              </button>
            </div>
          </div>
        </div>
        {listTransactions.length === 0 ? (
          <div className="noCards">
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img className="loading" src={noCard} alt="Não há lançamentos" />
          </div>
        ) : filtered === false ? (
          listTransactions.map((transaction, index) => (
            <div className="divCards" key={index}>
              <Card
                transaction={transaction}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions}
                handleDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          listFiltered.map((transaction, index) => (
            <div className="divCards" key={index}>
              <Card
                transaction={transaction}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions}
                handleDelete={handleDelete}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default List;

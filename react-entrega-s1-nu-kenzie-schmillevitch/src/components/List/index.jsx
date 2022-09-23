import Card from "../Card";
import noCard from "../../noCard.svg";
import { useState } from "react";

const List = ({ listTransactions, setListTransactions, handleDelete }) => {
  const [listFiltered, setListFiltered] = useState("todos");

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
                onClick={() => setListFiltered("todos")}
              >
                Todos
              </button>
              <button
                value={"Entrada"}
                className="buttonIn"
                onClick={() => setListFiltered("Entrada")}
              >
                Entradas
              </button>
              <button
                value={"Despesa"}
                className="buttonOut"
                onClick={() => setListFiltered("Despesa")}
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
        ) : listFiltered === "todos" ? (
          <>
            {listTransactions.map((transaction, index) => (
              <div className="divCards" key={index}>
                <Card
                  transaction={transaction}
                  setListTransactions={setListTransactions}
                  listTransactions={listTransactions}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </>
        ) : listFiltered === "Entrada" ? (
          <>
            {listTransactions.map(
              (transaction, index) =>
                transaction.select === "Entrada" && (
                  <div className="divCards" key={index}>
                    <Card
                      transaction={transaction}
                      setListTransactions={setListTransactions}
                      listTransactions={listTransactions}
                      handleDelete={handleDelete}
                    />
                  </div>
                )
            )}
          </>
        ) : (
          <>
            {listTransactions.map(
              (transaction, index) =>
                transaction.select === "Despesa" && (
                  <div className="divCards" key={index}>
                    <Card
                      transaction={transaction}
                      setListTransactions={setListTransactions}
                      listTransactions={listTransactions}
                      handleDelete={handleDelete}
                    />
                  </div>
                )
            )}{" "}
          </>
        )}
      </div>
    </>
  );
};

export default List;

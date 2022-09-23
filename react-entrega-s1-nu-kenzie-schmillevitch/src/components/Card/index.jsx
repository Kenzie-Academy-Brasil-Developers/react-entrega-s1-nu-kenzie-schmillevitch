import bin from "../../bin.svg";

const Card = ({ transaction, setListTransactions, listTransactions }) => {
  function handleDelete(transactionDelete) {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction !== transactionDelete
      )
    );
  }
  return (
    <div
      className={
        transaction.select === "Entrada" ? "cardList green" : "cardList"
      }
    >
      <div className="cardValue">
        <h3>{transaction.description}</h3>
        <div className="cardRight">
          <p className="transactionValue">R${transaction.value},00</p>
          <button
            className="deleteCard"
            onClick={() => handleDelete(transaction)}
          >
            <img src={bin} className="bin" alt="lixeira" />
          </button>
        </div>
      </div>
      <span>{transaction.select}</span>
    </div>
  );
};

export default Card;

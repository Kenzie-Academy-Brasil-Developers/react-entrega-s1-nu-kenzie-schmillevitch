const TotalMoney = ({ listTransactions }) => {
  const result = listTransactions.reduce((acc, current) => {
    const total =
      current.select === "Despesa"
        ? Number(acc) - Number(current.value)
        : Number(acc) + Number(current.value);
    return total;
  }, 0);
  return (
    <>
      <div className="totalContainer">
        <div className="totalCost">
          <p>Valor total:</p>
          <p className="resultTotal">R${result}</p>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    </>
  );
};

export default TotalMoney;

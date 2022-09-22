import logo from "./logo.svg";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <div className="App">
        <header className="header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <button className="buttonHome">Início</button>
          </div>
        </header>
        <div className="divMain">
          <div className="divFormValue">
            <Form setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </div>
    </>
  );
}

export default App;

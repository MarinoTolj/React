import './App.css';
import Balance from "./comp/Balance"
import { useState } from 'react';
import Transaction from './comp/Transaction';
import History from './comp/History';

function App() {
  const [balance, setBalance]=useState({
    totalIncome:0,
    totalExpense:0,
    income:0,
    expense:0,
    text:"",
  });
  const [history, setHistory]=useState([])
  



  return (
    <div id="main">
      <h1 id="title">Expense Tracker</h1>
      <Balance balance={balance} setBalance={setBalance} />
      <Transaction balance={balance} setBalance={setBalance} history={history} setHistory={setHistory}/><br />
      <History history={history} setHistory={setHistory}/>
    </div>
    
  );
}

export default App;

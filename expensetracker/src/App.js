import './App.css';
import Balance from "./comp/Balance"
import AddTransaction from './comp/AddTransaction';
import HistoryList from './comp/HistoryList';

function App() {

  return (
    <div id="main">
      <h1 id="title">Expense Tracker</h1>
      <Balance  />
      <AddTransaction /><br />
      <HistoryList />
      
    </div>
    
  );
}


export default App;

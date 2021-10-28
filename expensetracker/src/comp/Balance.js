import "../Balance.css"
import { useSelector } from "react-redux"


export default function Balance(){
    const transactions=useSelector(state=>state.transactions.transaction);

    const amounts=transactions.map(transaction=>transaction.amount);
    const totalAmount=amounts.reduce((total, item)=>(total+=item),0);

    const income=amounts.filter(item=>item>0).reduce((total, item)=>total+item, 0);
    const expense=amounts.filter(item=>item<0).reduce((total, item)=>total + item, 0);
    
    return(
        <div id="balance">
            <h1 id="balance-title"> Your Balance</h1>
            <p id="balance-value">${totalAmount}</p>

            <div id="income-expense">
                <p id="income">Income <br /> ${income}</p>
                <p id="expense">Expense <br /> ${expense}</p>
            </div>
        </div>
    )
}
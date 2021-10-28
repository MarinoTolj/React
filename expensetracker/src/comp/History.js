
import { deleteTransaction } from "../actions";
import { useDispatch } from "react-redux";

export default function History({transaction}){
    
    const sign= transaction.amount>0 ? "plus" : transaction.amount<0 ? "minus" : "zero-amount";
    const dispatch=useDispatch();
   

    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteTransaction(transaction.id))
    }

    return (<div>
        <form id="history-form" onSubmit={handleDelete}>
            <div id="history">
                <button type="submit" class="delete-btn">X</button>
                <p class="transaction-text">{transaction.text}</p>
                <p className={sign}>{sign==="plus"? "+" :""}{transaction.amount}</p>
                
            </div>
        </form>
        
        
        
    </div>)
}
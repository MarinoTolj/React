import { useState } from "react";
import {useDispatch } from "react-redux";
import {addTransaction} from "../actions/index"

export default function AddTransaction(){
    
    const [text, setText]=useState("")
    let [cash, setCash]=useState("")
    const dispatch=useDispatch();
    
    const handleTransactions=(e)=>{
        cash=parseFloat(cash)
        
        if(text!=="" && !isNaN(cash)){
            e.preventDefault();
            
            const newTransaction={
                amount:cash,
                text:text,
                id:Math.floor(Math.random()*10000)
            }

            dispatch(addTransaction(newTransaction));
        }

    }

    return(<div>
        Add new Transaction
        <hr />
        <form id="form">
            Text<br />
            <input type="text" id="amount-text" placeholder="Enter text" onChange={(e)=>setText(e.target.value)} required/> <br />
            Amount <br />
            (negative-expenses, positive-income)<br />

            <input type="text" id="amount-value" placeholder="Enter amount" value={cash} onChange={(e)=>setCash(e.target.value)} required/><br />

            <button type="submit" onClick={handleTransactions}>Add new transaction</button>
            
            
        </form>
    </div>)
}
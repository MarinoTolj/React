import { useEffect, useState } from "react";

export default function Transaction({balance, setBalance, history,setHistory}){
    const [text, setText]=useState("")
    let [cash, setCash]=useState("")
    
    const handleTransactions=(e)=>{
        //let text=document.getElementById("amount-text").value;
        //let amount=parseFloat(document.getElementById("amount-value").value);

        e.preventDefault();
        cash=parseFloat(cash)

        if(cash>0){
            console.log(text)
            setBalance((prev)=> ({
                ...prev,
                totalIncome:prev.totalIncome + cash,
                income:cash,
                expense:0,
                text:text
            }));
            
        }
        else if(cash<0){
            setBalance((prev)=> ({
                ...prev,
                totalExpense:prev.totalExpense + cash,
                expense:cash,
                income:0,
                text:text
            }));
        }
        else if(cash===0){
            setBalance((prev)=> ({
                ...prev,
                income:0,
                expense:0,
                text:text
            }));
        }

    }

    useEffect(()=>{
        if(balance.text!==""){
            setHistory((prev)=>{
                return [balance, ...prev];
            })}
    }, [balance])

    return(<div>
        Add new Transaction
        <hr />
        <form id="form" action="" required>
            Text<br />
            <input type="text" id="amount-text" placeholder="Enter text" onChange={(e)=>setText(e.target.value)} required/> <br />
            Amount <br />
            (negative-expenses, positive-income)<br />

            <input type="text" id="amount-value" placeholder="Enter amount" value={cash} onChange={(e)=>setCash(e.target.value)}/><br />

            <button type="submit" onClick={handleTransactions}>Add new transaction</button>
            
            
        </form>
    </div>)
}
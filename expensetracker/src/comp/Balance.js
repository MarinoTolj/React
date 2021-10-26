import "../Balance.css"


export default function Balance({balance, setBalance}){
    
    /* const change=(e)=>{
        e.preventDefault();
        
        setBalance((prev)=>({
            ...prev,
            income:balance.income + 50
        }))
        console.log("balance" + balance)
    } */
    return(
        <div id="balance">
            <h1 id="balance-title"> Your Balance</h1>
            <p id="balance-value">${balance.totalIncome + balance.totalExpense}</p>
            <form>
                {/* <button type="submit" onClick={change}>click me</button> */}
            </form>
            <div id="income-expense">
                <p id="income">Income <br /> ${balance.totalIncome}</p>
                <p id="expense">Expense <br /> ${balance.totalExpense}</p>
            </div>
        </div>
    )
}
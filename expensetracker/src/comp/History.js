import "../History.css"


export default function History({history,setHistory}){
    console.log(history)
    

    return (<div>

        History<br /><hr />
        <div id="history">
            {history.map((item, index)=>(
            <>
                <p key={index} className="text">{item.text}</p>

                {item.income!==0 ? <p className="income" key={index}>+{item.income}</p> : item.expense!==0 ? <p className="expense" key={index}>{item.expense}</p> : <p className="zero-amount">+0</p>}
                
            </>
                
            ))}
        </div>
        
        
    </div>)
}
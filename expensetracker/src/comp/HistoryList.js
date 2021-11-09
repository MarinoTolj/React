import "../HistoryList.css"
import History from "./History"
import { useSelector } from "react-redux"


export default function HistoryList(){
    //console.log(history)
    const transactions=useSelector(state=>state.transactions.transaction)

    return (<div>

        History<br /><hr />
        <div id="history-list">
            {transactions.map((item, index)=>(
                <History transaction={item} />
            ))}
        </div>
        
    </div>)
}
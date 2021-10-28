import { combineReducers } from "redux";
import transactionReducer from "./transaction";

const allReducers = combineReducers({
    transactions:transactionReducer
})

export default allReducers;

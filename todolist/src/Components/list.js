import React from "react";
import "./list.css"

export function List({list, handleRemove}){
    
    return(<div>
        {list.map((item, index)=>(
            <form id="itemList">
                <ul>{item}</ul>
                {item && <button type="submit" class="removeBtn" onClick={(e)=>handleRemove(index, e)} key={index}>X</button>}
            </form>
            
        ))}
        
    </div>)

}
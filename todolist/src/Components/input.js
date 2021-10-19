import React, { useState } from "react";
import "./Input.css";
import { List } from "./list";


export function Input(){

    const [list, setList]=useState([""])

    const handleInput=(event)=>{
        let text=document.getElementById("input").value;
        event.preventDefault();

        if(text){
            setList((prev)=>{
                return [...prev, text]
            });
        }
        
    }

    const handleRemove=(targetIndex, e)=>{

        e.preventDefault();

        setList((prev)=>{
            return prev.filter((item, index)=> index !== targetIndex)
        });
    }

    

    return(
        <form >
            <input type="text" id="input"></input>

            <button id="inputBtn"  type="submit" onClick={handleInput}>Submit</button>
            <List list={list} handleRemove={handleRemove}/>
            
        </form>
    )
}
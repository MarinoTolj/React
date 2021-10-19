import React, { useState } from "react";
import "./Input.css";
import { List } from "./List";


export function Input(){

    const [inputText, setInputText]=useState("")
    const [list, setList]=useState([""])

    const handleChange=(event)=>{
        setInputText(event.target.value);
    }

    const handleInput=(event)=>{

        console.log(inputText)

        if(inputText){
            setList((prev)=>{
                return [...prev, inputText]
            });
        }

        setInputText("");

        console.log(list);
        event.preventDefault();
    }

    const handleRemove=(targetIndex, e)=>{

        e.preventDefault();
        console.log("hello");

        setList((prev)=>{
            return prev.filter((item, index)=> index !== targetIndex)
        });
    }

    

    return(
        <form >
            <input type="text" id="input" onChange={handleChange}></input>

            <button id="inputBtn"  type="submit" onClick={handleInput}>Submit</button>
            <List list={list} handleRemove={handleRemove}/>
            
        </form>
    )
}
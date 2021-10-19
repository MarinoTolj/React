import './App.css';
import { Input } from './input';
//import {List} from "./List"

function App() {
  /* let things=[]
  let form=document.getElementById("form");

  let handleInput=(e)=>{
    console.log("Hello")
    things.push(e.target.value);
    console.log(things)
  }

  if(form){
    form.addEventListener('submit', handleInput(e), false);
  } */

  return (
    <div>
      <h1 id="title">ToDoApp</h1>

      <Input />
      
    </div>
    
    
  );
}

export default App;

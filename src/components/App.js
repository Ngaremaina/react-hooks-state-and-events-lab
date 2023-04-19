import React,{ useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass,setClass] = useState(false) 
  // ? "App dark" : "App light"
  // const [count, setCount] = useState(0)

  function handleClick(){
    setClass(!appClass)
    console.log(appClass)

  }

 

  // function handleCountClick() {
  //   setCount(count + 1)
  // }

  return (
    
    <div className={appClass? "App dark" : "App light"}>
      
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

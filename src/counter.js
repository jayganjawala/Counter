import React, { useState } from "react";
import './index.css';
import './App.css';

function Counter(){
    let [counter,setCounter] = useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        setCounter(counter-1)
    }

    return(
        <>
            <h1>Counrer:{counter}</h1>
            <button onClick={increment}>Increment</button>
            <br/>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter
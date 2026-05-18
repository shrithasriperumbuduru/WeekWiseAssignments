import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count :{count}</h1>
            <button className="bg-amber-400 px-6 py-3 mr-10" onClick={increment}>Increment</button>
            <button className="bg-red-200 px-6 py-3 mr-10" onClick={decrement}>Decrement</button>
        </div>
    )
}
import React, { useState, useEffect } from 'react'

export default function UseEffect() {
    const [number, setNumber] = useState(0);
    const [state, setState] = useState(10);

    useEffect(()=>{
        document.title = `you clicked ${number} times`;
        console.log("title is changed");
    },[number])
    
    
    return (
        <div>
            <h1>hello world its Number {number}</h1>
            <h2>hello world its State{state}</h2>
            <button onClick={()=>setNumber(number+1)}>click me</button>
            <button onClick={()=>setState(state+1)}>state changed</button>
        </div>
    )
}

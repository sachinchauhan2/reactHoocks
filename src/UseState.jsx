import React ,{useState}from 'react'

export default function App() {
    const [number,setNumber] = useState(0);

    const handleNumber = () =>{
        setNumber(number+1);
    };
  return (

    <div>
        <h1>Hello World its {number}</h1>
        <button onClick={handleNumber}>Click me</button>

    </div>
  )
}



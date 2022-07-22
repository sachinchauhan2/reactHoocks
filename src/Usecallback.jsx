import React,{useState,useCallback} from 'react'
const funccount = new Set();

export default function Usecallback() {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(0);
    const incrementCounter = useCallback(() =>{
        setCount(count+1)},[count]);

    const decremnentCounter = useCallback(() =>{
        setCount(count-1)},[count]);
    const incrementNumber =useCallback(() =>{
        setNumber(number-1)},[number]);
    funccount.add(incrementCounter)
    funccount.add(decremnentCounter)
    funccount.add(incrementNumber)
    alert(funccount.size)
  return (
    <div>
        Count:{count}
        <button onClick={incrementCounter}>Increase Counter</button>
        <button onClick={decremnentCounter}>Decrease Counter</button>
        <button oncClick ={incrementNumber}>Increase Number</button>
        </div>
  )
}

import React from 'react'
import UseStateHooks from './UseState.jsx'
import UseEffect from './UseEffect.jsx'
import Usememo from './Usememo.jsx'
import Usecallback from './Usecallback.jsx'

export default function App() {
  return (
    <div>
      <h1>----------useState----------</h1>
      <UseStateHooks/>
      <h1>----------useEffect---------</h1>
      <UseEffect/>
      <h1>----------usememo-----------</h1>
      <Usememo/>

      <h1>----------usecallback-----------</h1>
      <Usecallback/>
    </div>

  )
}

import { useState } from 'react'
import './App.css'

function App() {

  // String tckn = "123132131231"
  //String firstName = "Enes"

  //useState : hooks

  //useState : Bir state'in değerini set metodunu kullanarak değiştirdiğinde componenet yeniden render edilir.

  const [count, setCount] = useState(0);
  // 1000 satır kod

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  console.log("component render edildi")

  return (
    <div>
      <div>  {count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)
  function handleClick1() {
    alert("Click1");
  }
  function handleClick4(num){
    const nm = num + 12;
    alert(nm);
  }
  return (
    <>
      {/* <button onClick={handleClick1}>Click me1</button>
      <button onClick={function handleClick2(){
        alert("Clickkedddddddd 2")
      }}>Click me2</button>
      <button onClick={()=>alert("Clicked3")}>Click me3</button>
      <button onClick={()=> handleClick4(7)}>Click me4</button>
      <button onClick={handleClick1}>Click me5</button> */}
      <Counter></Counter>
    </>
  )
}

export default App

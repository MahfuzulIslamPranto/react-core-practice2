import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {
  const fetchPromise = fetchFriends();
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
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App

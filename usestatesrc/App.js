import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(5);

  const decrementCount=()=>{
    setCount(count-1);
    console.log(count);
  }
    const incrementCount=()=>{
    setCount(count+1);
  }

  return (
    <div className="App">
      <h2>
      <button onClick={decrementCount}>-</button>
          <span>{count}</span>
       <button onClick={incrementCount}>+</button></h2>
    </div>
  );
}
export default App;











import { useState,useEffect} from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  let counter = 0
  const [counter2, setCounter2] = useState(0) // 여기서 0 부분은 초기값을 의미함
  const [value, setValue] = useState(0)
  const increase = () => {
    counter = counter + 1
    // setCounter2(counter2 + 1)
    setValue(value+2)
    console.log("counter는", counter,"counter2 state는", counter2)
  }

  useEffect(()=>{
    console.log("useEffect1 Fire")
  },[]) 

  useEffect(()=>{
    console.log("useEffect2 fire",counter2,value)
  },[counter2])

  useEffect(()=>{
    console.log("value 다른 내용",value)
  },[value])

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
    
  );
}

export default App;

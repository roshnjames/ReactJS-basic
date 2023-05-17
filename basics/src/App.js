
import './App.css'
import Head from './components/Header'
import {useState} from 'react'
import Counter from './Counter'
import Hide from './components/Hide'


export default function App() {
  const data={place:"From kanamala"}
  let [cn,setCn]=useState(0)
  let [state,setState]=useState(false)
  let addCount=()=>{
  setCn(cn+1)
  }
  let subCount=()=>{
    setCn(cn-2)
  }
  let obj=[{
    title:"Counter 1",
    c:cn,
    place:"knmlaaaa"
  },{
    title:"Counter 2",
    c:cn+1,
    place:"idki"
  },{
    title:"Counter 3",
    c:cn+2,
    place:"tvm"
  }]
  return (  
    <div>  
      <Head dt={data.place}/>
      <button onClick={addCount} >Addition</button>
      <Hello/>
      {
      obj.map((obj,index)=>{
        return(
          <Counter key={index} {...obj}/>
        )
      })
    }
      <Hello/>
      <button onClick={subCount}>Subtract</button>
      <h1 className='hello'>Roshin James {data.place}</h1>
      <button onClick={()=>{setState(!state)}}>Show</button>
      {state?<Hide/>:null}

   </div>
   );
}



function Hello(){
  return(
    <hr/>
  );
}
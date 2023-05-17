import {useState,useEffect} from 'react'
export default function Hide(){
    useEffect(()=>{
        console.log("mounting")
    },[])
    let [count,setCount]=useState(1000)
    return(
        <>
        <br/><br/>
         <button onClick={()=>setCount(count+1)}>+1</button>
         <h3>Now @ :{count}</h3>
        </>
    )
}
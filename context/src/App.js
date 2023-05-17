import React from "react"
import App1 from './App1'
import { AppContext } from "./AppContext"
import {useState} from 'react'
 function App(){

    let state="context worked"
    return(
        <div style={{backgroundColor:'red',width:'cover',height:'cover'}}>
            <AppContext.Provider value={{data:state}}>
            <App1/>
            <h3>layer one</h3>
            </AppContext.Provider> 
        </div>
    );
}

export default App
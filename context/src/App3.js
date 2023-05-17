import React, { useContext } from 'react'
import { AppContext } from './AppContext'
function App3() {
  const {data}=useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:'160px',height:'100px'}}>
      <h3>last result</h3>
        <h3>value is :{data}</h3>
    </div>
  )
}

export default App3

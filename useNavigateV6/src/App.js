import { Routes, Route, useNavigate} from 'react-router-dom';
import App2 from './App2'
import App3 from './App3'
function App(){
const navigate=useNavigate()
    return(
        <div>
           <button style={{marginLeft:'20px',backgroundColor:'cyan'}} onClick={()=>navigate("/")}>Home</button>
           <button style={{marginLeft:'20px',backgroundColor:'lightgreen'}} onClick={()=>navigate("/App2")}>App2</button>
           <button style={{marginLeft:'20px',backgroundColor:'orange'}} onClick={()=>navigate("/App3")}>App3</button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/App2" element={<App2 />} />
            <Route path="/App3" element={<App3 />} />
            <Route path='*' element={<Nomatch/>}/>
          </Routes>
          </div>
        
    );
}

export default App


function Home() {
    return (
   
      <div style={{backgroundColor:'yellow'}}>
        <h1> Name : Roshin James</h1>
      </div>
    )
  }

  function Nomatch(){
    return(
        alert("invalid url entry")
    )
  }

 
 

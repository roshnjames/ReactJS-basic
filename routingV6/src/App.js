import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App2 from './App2'
import App3 from './App3'
 function App(){

    return(
        <Router>
           <button style={{marginLeft:'20px',backgroundColor:'cyan'}}><Link to="/" >Home</Link></button>
           <button style={{marginLeft:'20px',backgroundColor:'lightgreen'}}> <Link to="/App2" >App2</Link></button>
           <button style={{marginLeft:'20px',backgroundColor:'orange'}}><Link to="/App3" >App3</Link></button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/App2" element={<App2 />} />
            <Route path="/App3" element={<App3 />} />
            <Route path='*' element={<Nomatch/>}/>
          </Routes>
        </Router>
        
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

 
 

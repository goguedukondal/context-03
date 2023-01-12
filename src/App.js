import Navbar from './Components/Navbar';
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import './App.css';
import contextTheme from './Components/context';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Login from './Components/Login';
import More from './Components/More';
import { useState } from 'react';
 

function App() {
  const [islight, setIslight] =useState(true);

 const changeTheme=(e)=>{
  setIslight(e);
 }
  return (

    <div className={islight?"dark":"light"} style={{height:"100vh"}}>
      <contextTheme.Provider value={{islight,changeTheme}}>
     
        <BrowserRouter>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/More" element={<More/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route/>
        </Routes>
        </BrowserRouter>
        
     

      </contextTheme.Provider>
      
      
    </div>
  );
}

export default App;

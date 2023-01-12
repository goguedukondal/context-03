import React from 'react'
import {Link} from 'react-router-dom';
import Button1 from './Button1';


// import contextTheme from './context';

function Navbar() {
//   const isLight = useContext(contextTheme);
 
   
  return (
    <div className='navbar' >
        
        <Link to= "/"  className='link'  ><p>Home</p></Link>
        <Link to= "/About"  className='link' ><p>About</p></Link>
        <Link to= "/Blog"  className='link' ><p>Blog</p></Link>
        <Link to= "/Contact"  className='link' ><p>Contact</p></Link>
        <Link to= "/More"   className='link'><p>More</p></Link>
        <span className='login' style={{marginTop:"1rem",marginLeft:"20rem"}}>Login</span>
        <Button1 className="link"  />

    </div>
  )
}

export default Navbar

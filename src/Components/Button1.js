import React, { useContext } from 'react'
import contextTheme from './context'

function Button1() {
    const {islight,changeTheme}=useContext(contextTheme);
  return (
    <div>
        <button onClick={()=>changeTheme(!islight)} className={islight?"dark":"light"} style={{marginTop:"1rem",borderRadius:"5px"}}>Change Theme</button>
    </div>
  )
}

export default Button1
import React, { useState } from 'react'

const homeRenders = () => {
const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    {
        loggedIn ? (
            <h1>Bem vindo de volta!</h1>
        ):(
            <button onClick={()=>setLoggedIn
            (true)}>Entrar</button>
        )
    }
    </>
  )
}

export default homeRenders
import React, { useEffect, useState } from 'react'
import MainTheme from './Components/Theme/MainTheme'
import Togle from './Components/Togle'

const App = () => {
  // const [user, setUser] = useState([]);
  // useEffect(()=>{
  //   async function getData(){
  //     const response = await fetch("https://randomuser.me/api")
  //     const data = await response.json();
  //     setUser(data.results)
  //   }
  //   getData()
  // },[])
  return (
    <div>
      {/* {user.length > 0 ? (
        user[0].name.first
      ): (
        <p>Loading...</p>
      )}       */}
      {/* <MainTheme/> */}
      <Togle/>
        
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://randomuser.me/api")
      const data = await response.json();
      setUser(data.results)
    }
    getData()
  },[])
  return (
    <div>
      {user.length > 0 ? (
        user[0].name.first
      ): (
        <p>Loading...</p>
      )}      
    </div>
  )
}

export default App
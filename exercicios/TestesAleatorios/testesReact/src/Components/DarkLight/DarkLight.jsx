import { useEffect, useState } from "react"
import './DarkLight.css'

const DarkLight = () => {
    const [theme, setTheme] = useState('dark')
    const [user, setUser] = useState([]);
    useEffect(()=>{
        document.querySelector('body').setAttribute('data-theme', theme)
    },[theme])
    useEffect(()=>{
      async function getData(){
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        setUser(data)
      }
      getData()
    }, [])

  return (
    <div>
        <input type="checkbox" checked={theme === 'dark'} onChange={(e)=>{
            setTheme(e.target.checked ? 'dark' : 'light')
        }} />
        assetto corsa
        {user.map((user)=> {
          <li key={}></li>
        })}
    </div>
  )
}

export default DarkLight
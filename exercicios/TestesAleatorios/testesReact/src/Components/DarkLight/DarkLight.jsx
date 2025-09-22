import { useEffect, useState } from "react"
import './DarkLight.css'

const DarkLight = () => {
    const [theme, setTheme] = useState('dark')
    useEffect(()=>{
        document.querySelector('body').setAttribute('data-theme', theme)
    },[theme])

  return (
    <div>
        <input type="checkbox" checked={theme === 'dark'} onChange={(e)=>{
            setTheme(e.target.checked ? 'dark' : 'light')
        }} />
        assetto corsa
    </div>
  )
}

export default DarkLight
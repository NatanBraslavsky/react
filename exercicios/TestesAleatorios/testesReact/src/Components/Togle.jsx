import { useEffect, useState } from "react"
import './togle.css'

const Togle = () => {
    const [theme, setTheme] = useState("dark")
    const togleTheme = (e) =>{
        setTheme(e.target.checked ? "dark" : "light");
    }
    useEffect(()=>{
        document.body.setAttribute("data-theme", theme)
    },[theme])
  return (
    <div>
        <input 
            type="checkbox" 
            checked={theme === "dark"}
            onChange={togleTheme}
        />
    </div>
  )
}

export default Togle
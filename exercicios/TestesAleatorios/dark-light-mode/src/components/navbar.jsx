import { Link } from 'react-router-dom'
import '../style.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const[theme, setTheme] = useState('dark')
    const changeChecked = (e) =>{
        setTheme(e.target.checked ? 'dark' : 'light')
    }
    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme])
  return (
    <nav className='nav-bar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <input type="checkbox" checked={theme === 'dark'} onChange={changeChecked}/>
    </nav>
  )
}

export default NavBar
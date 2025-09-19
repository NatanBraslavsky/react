import { createContext, useContext, useState } from "react"
import './MainTheme.css';

const ThemeContext = createContext(null);

const MainTheme = () => {
    const [theme, setTheme] = useState('light');
  return (
    <ThemeContext value={theme}>
        <Form/>
        <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) =>{
                setTheme(e.target.checked ? 'dark' : 'light')
            }}
        />
    </ThemeContext>
  )
}
export default MainTheme

const Form = () => {
    return(
        <Panel title={"Welcome"}>
            <Button>Sign Up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}

const Panel = ({title, children}) => {
    const theme = useContext(ThemeContext);
    const classname = 'panel-'+theme;
    return(
        <section className={classname}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

const Button = ({children}) =>{
    const theme = useContext(ThemeContext)
    const classname = 'button-'+theme
    return(
        <button className={classname}>{children}</button>
    )
}
import { useState } from "react"

const Switcher = () => {
    const [sw, setSw] = useState(true);
  return (
    <div>
        {sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        )}
        <br />
        <input type="text" key={sw ? 'Dark': 'Light'}/>
        <button onClick={()=>setSw(!sw)}>Change</button>
    </div>
  )
}

export default Switcher
import React, { useState } from 'react'
import { sculptureList } from './data/data'

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      {sculptureList[index].name}
      <br />
      {sculptureList[index].artist}
      <br />
      {sculptureList[index].description}
      <br />
      <button onClick={()=> setIndex(index+1)}>Next</button>
    </div>
  )
}

export default App
import { useState } from 'react'
// import Counter from './Components/Counter'
// import ObjectList from './Components/ObjectList'
// import Todo from './Components/Todo'
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

function App() {
  const [count, setCount] = useState(0);
  return (
    <main>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <ObjectList/> */}
      <ComponentOne count={count} onClickHandler = {() => setCount(count+1)}/>
      <ComponentTwo count={count} onClickHandler = {() => setCount(count+1)}/>
    </main>
  )
}

export default App

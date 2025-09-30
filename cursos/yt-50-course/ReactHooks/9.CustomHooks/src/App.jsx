import useFetch from "./useFetch"

const App = () => {
  // const [data, setData] = useState(null);
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res)=> res.json())
  //   .then((data)=> setData(data));
  // }, [])

  // return (
  //   <div>
  //     {data && data.map((user)=>(
  //       <li key={user.id}>{user.title}</li>
  //     ))}
  //   </div>
  // )
  //? Esse jeito teria que repetir em todo arquivo, por isso criei um hook custom em 'useFetch.jsx'
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return(
    <div>
      {data && data.map((user)=>(
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  )
}

export default App
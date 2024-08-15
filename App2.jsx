import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function useTodos() {
  const [todos , setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false); //when data fetched from backend then obviously the loading will be set to false
      })
  },[]);

  return {todos,loading};
}


function App() {

  const {todos,loading} = useTodos();

  if (loading) {
    return <div>Loading ...</div>
  }
  return (
    <div>
      {todos.map((todo,i) => <Track key={i} todo= {todo} />)}
    </div>
  )
}

function Track({todo}) {
  return(
    <div>
      <div>
        {todo.title}
      </div>
      <div>
        {todo.description}
      </div>
    </div>
  )
}

export default App;

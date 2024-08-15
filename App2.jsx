import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function useTodos(n) {
  const [todos , setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => { //we wrote this logic ourselves but we can use a famous library called useSWR which does the same thing we basically wrote useSWR by ourselves , we can use the useSWR in tthe App function directly
    const value = setInterval(() => { //what it does is that it fetches the random set of todos in every second the most updated way to do is with websockets in todays world but for understanding we are using this old ass setinterval method
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false); //when data fetched from backend then obviously the loading will be set to false
      })
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos") //run this once then the upper code will run on every 5 seconds we are running this because in the beginning the user will not see any code in the beginning of 5 seconds
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false); //when data fetched from backend then obviously the loading will be set to false
      })

      return () => {
        clearInterval(value); //we put the setinterval in a variable called value and here we are passing thaat value inside the clear interval function which basically clears the old interval and whenver an another interval is started the old interval is shutted down 
      }

  },[n]); //we are putting n as a dependency here that means whenver the n changes then basically the interval runs again so that becomes 2 intervals so when the n changes the new interval will start runniing and we have to clear the old interval if we dont then there will be 2 clocks running that is very much unoptimized and hitting the backend more often than ususal so the above return is the clean up function 

  return {todos,loading};
}


function App() {

  const {todos,loading} = useTodos(5);

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

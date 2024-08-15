//go to github repo called custom hooks-prac for detail

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

//useonline hooh >> browser functionality related hooks
// hook returns true or false based on whethter the user is online or offline 
//window.navigator.online returns true or false if the user is online or offline 

function useIsOnline() {
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online' , () => {
      setIsOnline(true);
    })
    window.addEventListener('offline', () => {
      setIsOnline(false);
    })
  },[]);
  return isOnline;
}

function App() {

  const isOnline = useIsOnline();

  if(isOnline) {
    return "yay user is online!!"
  }
  return 'oopsy doopsy user is offline , turn on ur wifi bitch!!'

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

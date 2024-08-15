import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [render,setRender] = useState(true);

  /*
  useEffect(() => {
    setTimeOut(() => {
      setRender(false)
    }, 10000);
  },[]);
  */

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r)
    }, 5000);
  },[]);

  return (
   <div>
    {render ? <MyComponent /> : <div></div>}
   </div>
  )
}

function MyComponent() {

  useEffect(() => {
    console.error("component got mounted!!");

    return () => {
      console.log("component got unmounted!!")
    }
  },[]);

  return (
    <div>
      this is my MyComponent from the inside 
    </div>
  )
}


export default App

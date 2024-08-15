import { useState,useEffect } from "react";


function useInterval(fn,timeout) {
  useEffect(() => {
    const interval = setInterval(fn, timeout);
    return () => {
      clearInterval(interval);
    }
  },[]);
}

function App() {
  const [count,setCount]  = useState(0);

  useInterval(() => {
    setCount(c => c+ 1);
  } , 1000);

  return (
    <div>
      the timer is {count}
    </div>
  )

}

export default App;

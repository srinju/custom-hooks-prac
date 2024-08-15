import { useEffect , useState } from "react";


const useMousePointer = () => {
  const [position , setPosition] = useState({x : 0 , y : 0});

  const handleMouseMove = (e) => {
    setPosition({x : e.clientX , y : e.clientY});
  };

  useEffect(() => {
    window.addEventListener('mousemove' , handleMouseMove);

    return () => {  //clean up function when the mouse is moved again we basically clear the old mouse move and track the new mouse move
      window.addEventListener('mousemove' , handleMouseMove );
    }
  },[]);

  return position;
}

function App() {

  const mousePointer = useMousePointer();

  return <div>
    your mouse position is {mousePointer.x} {mousePointer.y}
  </div>
  
}

export default App;

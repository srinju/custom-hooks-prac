const { useState, useEffect } = require("react")

const useDebounce = (value,delay) => {
  const [debouncedValue,setDebouncedValue] = useState(value);

  useEffect(() => {
    const dikjik = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
    return () => {
      clearTimeout(dikjik);
    }
  },[value,delay]);

  return debouncedValue;
}


function App() {
  return (
    <div>

    </div>
  )
}

export default App;

import React, { useEffect, useState } from "react";
const App = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <>App {count} </>;
};
export default App;

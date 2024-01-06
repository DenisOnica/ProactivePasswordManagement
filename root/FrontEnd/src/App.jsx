import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/table/passwords");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return <>test</>;
}

export default App;

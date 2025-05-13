import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const[actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => setActress(response.data.results))
  };

  useEffect(() =>{
    fetchActress();
  }, []);

  return (
    <>

    </>
  )
}

export default App

import {useEffect, useState} from 'react';
import './App.css';
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
    useEffect(()=>{
      async function fetchTours(){
      const response = await fetch(url);
      const data =  await response.json();
      setIsLoading(false)
      setTours(data)
      }
      fetchTours()
    },[])

    if (isLoading){return <h1>Loading...</h1>}

  const test=[{id: 1,image: "randomImage", name: "Test", info: "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test", price:"2"}]
  // console.log(tours)
    return <Tours tours={test}  />;
    // return <Tours tours={tours}  />;
  }


export default App;

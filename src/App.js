import {useEffect, useState} from 'react';
import './App.css';
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
    useEffect(async ()=>{
      const response = await fetch(url);
      const data =  await response.json();
      setIsLoading(false)
      setTours(data)
    },[])

    if (isLoading){return <h1>Loading...</h1>}

    return <Tours tours={tours}  />;
  }


export default App;

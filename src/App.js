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
      setTours(data)
      setIsLoading(false)
      }
      fetchTours()
    },[isLoading])

  const handleRefresh = ()=> setIsLoading(true)

    if (isLoading){return <h1>Loading...</h1>}
  return (
    <main>
      <section>
        <div>
          <h1 className="page-title">Our Tours
          <div className="underline"></div>
        </h1>
          <Tours tours={tours} onRefresh={handleRefresh} />;
        </div>
      </section>
      </main>)
  }


export default App;

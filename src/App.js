import {useEffect, useState} from 'react';
import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [content, setContent] = useState([])
  const [currentTabId, setCurrentTabId] = useState('')

  const setTabContent = () => {
    let actualContent;
    if (!currentTabId){
      actualContent = content[0]
    }else{
      actualContent = content.find((content) => {return content.id === currentTabId})
    }
    const duties = actualContent.duties
    return duties.map((duty)=>{
      return <p>{duty}</p>
    })
  }

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch(url)
      const content = await response.json()

      setContent(content)
      setIsLoaded(true)
    }
    fetchData()
  }, [])

  if (!isLoaded){return <h1>Loading...</h1> } 

  return (
    <>
    <section className="tabs">
      <div className="tabs-buttons">
        {content.map((button)=>{return <button onClick={()=>{setCurrentTabId(button.id)}}>button.company</button>})}
      </div>
      <div className="tabs-content">
        {setTabContent()}
      </div>

    </section>
    </>
  );
}

export default App;

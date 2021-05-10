import {useEffect, useState} from 'react';
import './App.css';
import people from './data'
import People from './People'

function App() {
  const [index, setIndex] = useState(1)

  const increaseIndex = () => {
    if (index >= people.length){
      setIndex(1)
    }else {
      setIndex((oldValue)=>oldValue + 1)
    }
  }

  const decreaseIndex = () => {
    if (index <= 1){
      setIndex(people.length)
    }else {
      setIndex((oldValue)=>oldValue - 1)
    }
  }

return (
  <>
  <section className="carousel" >
    <People people={people} activeIndex={index}/>
    <div>
      <button onClick={decreaseIndex} className="person-left">LEFT</button>
      <button onClick={increaseIndex} className="person-right">RIGHT</button>
    </div>
  </section>
  </>
);
}

export default App;

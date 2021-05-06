import {useState} from 'react';
import './App.css';
import people from './data'
import Person from './Person'


function App() {
  const [currentPersonId, setCurrentPersonId] = useState(1)

  const handleToRight = ()=>{
    if (people.length === currentPersonId){
      setCurrentPersonId(1)
    }
    else{
      setCurrentPersonId((oldValue) => oldValue + 1)
    }
  }
  const handleToLeft = ()=>{
    if (1 === currentPersonId){
      setCurrentPersonId(people.length)
    }
    else{
      setCurrentPersonId((oldValue) => oldValue - 1)
    }
  }
  const handleRandom = ()=>{
     let randomNumber = Math.floor((Math.random() * (people.length-1) + 1))
    if (randomNumber >= currentPersonId) randomNumber++
      setCurrentPersonId(randomNumber)
  }


  let person = people.find((person) => person.id === currentPersonId)
  return (
    <Person person={person} onLeft={handleToLeft} onRight={handleToRight} onRandom={handleRandom}/>
  );
}

export default App;

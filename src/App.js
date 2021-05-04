import './App.css';
import People from './People'
import data from './data'
import {useState} from 'react';

console.log(data)
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main >
    <h1 className="numberOfPeople">{people.length} birthdays today</h1>
    <People people={people}/>
    <button onClick={()=>{setPeople([])}}>Clear all</button>
    </main>
  );
}

export default App;

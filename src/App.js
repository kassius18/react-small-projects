import './App.css';
import Questions from './Questions'
import data from './data'

function App() {
  return (
    <Questions questions={data}/>
  );
}

export default App;

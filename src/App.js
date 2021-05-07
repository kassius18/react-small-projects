import Menu from './Menu'
import data from './data'
import './App.css';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState(data)

  const onAll = () => setItems(data) 
  const onBreakfast = () => {
    setItems(() => {
      return data.filter((item) => item.category === 'breakfast')
    })
  }
  const onLunch = () => {
    setItems(() => {
      return data.filter((item) => item.category === 'lunch')
    })
  }
  const onShakes = () => {
    setItems(() => {
      return data.filter((item) => item.category === 'shakes')
    })
  }

  return (
    <main>
      <div className="filters">
        <button onClick={onAll} className="filters-all">All</button>
        <button onClick={onBreakfast} className="filters-breakfast">Breakfast</button>
        <button onClick={onLunch} className="filters-lunch">Lunch</button>
        <button  onClick={onShakes} className="filters-shakes">Shakes</button>
        </div>
          <Menu items={items}/>
    </main>
  );
}

export default App;

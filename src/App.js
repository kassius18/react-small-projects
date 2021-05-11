import {useRef, useState} from 'react';
import Value from 'values.js'
import './App.css';
import ColorBlock from './ColorBlock'

function App() {
  const initialColor = '#0000ff'
  const [mainColor, setMainColor] = useState(initialColor)
  const inputEl = useRef(initialColor)
  const colors = new Value(mainColor)

  const handleSubmit = (event)=>{
    event.preventDefault()
    setMainColor(inputEl.current.value)
  }

  return (
    <>
    <main>
      <div>
        <h1>color generator</h1>
        <form className="colors-form" onSubmit={handleSubmit}>
          <input type="text" ref={inputEl} defaultValue={initialColor}/>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      <section className="colors">
        {(colors.all()).map((color)=>{
          console.log(color.weight)
          return <ColorBlock key={color.hexString()} color={color.hexString()} weight={color.weight}/>
        })}
        </section>

      </main>


    </>

  );
}

export default App;

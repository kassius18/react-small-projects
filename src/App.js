import {useRef, useState} from 'react';
import './App.css';
import data from './data'

function App() {
  const [ numberOfParagraphs, setNumberOfParagraphs] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault()
    let paragraphs;
    if (inputEl.current.value < 1){
      paragraphs = 1
    }else if (inputEl.current.value > data.length){
      paragraphs = data.length
    }else {
      paragraphs = inputEl.current.value
    }
    setNumberOfParagraphs(paragraphs)
  }
  const inputEl = useRef(0)
  console.log(data)


  return (
    <>
    <h1>Tired of boring Lorem Ipsum?</h1>
    <form className="form" onSubmit={handleSubmit}>
      <input ref={inputEl} defaultValue="0" type="number" className="form-input"/>
      <button className="form-submit" type="submit">Submit</button>
    </form>
    <section className="paragraphs">
      {(data.slice(0, numberOfParagraphs)).map((paragraph)=>{
        return <p className="paragraphs-paragraph">{paragraph}</p>
      })}

      </section>
    </>
  );
}

export default App;

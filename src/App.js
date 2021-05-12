import {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
  const inputEl = useRef("e.g. eggs")
  const editedId = useRef('')
  const alertEl = useRef('')

  const [groceryList, setGroceryList] = useState([])
  const [isSubmit, setIsSubmit] = useState(true)
  const [isAlert, setIsAlert] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmit){
      if (inputEl.current.value){
        setGroceryList([...groceryList, {id: new Date().getTime(), name: inputEl.current.value}])
        setIsAlert(true)
        alertEl.current = "Added item"
      }
      else {
        setIsAlert(true)
        alertEl.current = "Enter non empty name"
      }
    }else {
      setGroceryList(groceryList.map((groceryItem) => {
        if (groceryItem.id === editedId.current) {
          return {id:editedId, name:inputEl.current.value}
        }
        return groceryItem
      }))
      setIsSubmit(true)
    }
    event.target.reset()
  }

  const handleEdit = ({name, id}) => {
    inputEl.current.value = name
    editedId.current = id
    setIsSubmit(false)
  }

  const handleDelete = (id) => {
    setGroceryList(groceryList.filter((groceryItem) => groceryItem.id !== id))
  }

  useEffect(()=>{
    const clearAlertTimer = setTimeout(()=>{
      setIsAlert(false)
    }, 1000)

    return ()=>{clearTimeout(clearAlertTimer)}
  },[isAlert])

  return (
    <main>
      {isAlert && <div ref={alertEl}>{alertEl.current}</div>}
      <h1>Grocery Bud</h1>
      <form className="list-form" onSubmit={handleSubmit}>
        <input ref={inputEl} type="text" placeholder="e.g. eggs"/>
        <button type="submit">{isSubmit ? "Submit" : "Edit"}</button>
      </form>
      <ul className="list">
        {groceryList.map((listItem)=>{
          return <>
            <li key={listItem.id} className="listem-item">{listItem.name}<span className="list-item-edit" onClick={()=>handleEdit(listItem)}> ed</span><span onClick={() => {handleDelete(listItem.id)}}className="list-item-delete"> del</span></li>
            </>
        })}
          </ul>
          {groceryList.length ? <button onClick={()=>{setGroceryList([])}}>Clear all</button> : null}
        </main>
  );
}

export default App;

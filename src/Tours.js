import {useState} from 'react'
import Tour from './Tour'

function Tours({tours, onRefresh}){
  const [availableTours, setAvailableTours] = useState(tours)
  const handleDelete =(id)=>{
    const newTours = availableTours.filter((tour) => tour.id !== id)
    setAvailableTours(newTours)
  }
  if (!availableTours.length){return <button onClick={onRefresh}>Refresh</button>}

  return (availableTours.map((tour)=>{
    return (<Tour key={tour.id} tour={tour} onDelete = {handleDelete}/>)
  }))
}

export default Tours

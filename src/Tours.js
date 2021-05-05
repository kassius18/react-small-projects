import Tour from './Tour'

function Tours({tours}){
  console.log(tours)
  return tours.map((tour)=>{
    return (<Tour tour={tour}/>)
  })
}

export default Tours

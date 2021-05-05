import Tour from './Tour'

function Tours({tours}){
  return tours.map((tour)=>{
    return (<Tour tour={tour}/>)
  })
}

export default Tours

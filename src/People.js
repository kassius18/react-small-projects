import Person from './Person'
//mark previous, active and next
function People({people, activeIndex}){
  let nextIndex;
  let prevIndex;

  if (activeIndex === 1){
    nextIndex = 2
    prevIndex = people.length
  } else if (activeIndex === people.length){
    nextIndex = 1
    prevIndex = people.length - 1
  } else {
    nextIndex = activeIndex + 1
    prevIndex = activeIndex - 1
  } 

  console.log("prevIndex is", prevIndex)
  console.log("index is", activeIndex)
  console.log("nextIndex is", nextIndex)

  return people.map((person, index)=>{
    let order = '';
    console.log(index)
    console.log(order)
    if (activeIndex-1 === index){
      order = "active"
    } else if (nextIndex-1 === index){
      order = "nextSlide"
    } else if (prevIndex-1 === index){
      order = "prevSlide"
    }
    return <Person key={person.id} person={person} order={order} />
  })
}

export default People;

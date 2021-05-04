import Person from './Person' 

function People({people}){
  return people.map((person) => {return <Person person={person}/>})
}

export default People

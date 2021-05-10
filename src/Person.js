import "./Person.css"

function Person({id, person, order}){
  return <article id={id} className={"person " + order}>
    <img src={person.image} alt="" className="person-image"/>
    <h4 className="person-name">{person.name}</h4>
    <h4 className="person-job">{person.job}</h4>
    <p className="person-text">{person.text}</p>
  </article >
}

export default Person

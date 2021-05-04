import "./Person.css"

function Person({person}){
  return (
    <section className="person">
      <img src={person.image} alt="" className="person-img"/>
      <div className="person-info">
        <h4 className="person-name">{person.name}</h4>
        <p className="person-age">{person.age}</p>
      </div>
    </section>
  )
}

export default Person

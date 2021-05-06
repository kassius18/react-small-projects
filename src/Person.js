import "./Person.css"

function Person({person, onLeft, onRight, onRandom}){
  return <div className="person">
    <img src={person.image} alt="" className="person-image"/>
    <h4 className="person-name">{person.name}</h4>
    <h4 className="person-job">{person.job}</h4>
    <p className="person-text">{person.text}</p>
    <div>
      <button onClick={onLeft} className="person-left">LEFT</button>
      <button onClick={onRight} className="person-right">RIGHT</button>
    </div>
    <button className="person-button" onClick={onRandom}>Surprise me</button>

  </div>
}

export default Person

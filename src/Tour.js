function Tour({key, tour}){
  return (
    <article className="tour">
      <img src={tour.image} alt=""/>
      <div className="tour-description">
        <h5 className="tour-name">
          {tour.name}
        </h5>
        <span className="tour-price">{tour.price}</span>
        <p className="tour-info">{tour.info}</p>
      </div>
      <button>Not interested</button>
    </article>
  )
}

export default Tour;

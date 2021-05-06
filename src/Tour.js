import {useState} from "react";

function Tour({tour, onDelete}){
  const [isShowMore, setIsShowMore] = useState(true)
  const toggleShowMore = () =>{
    setIsShowMore((prevValue) =>{return !prevValue})
  }

  return (
    <article className="tour">
      <img src={tour.image} alt=""/>
      <div className="tour-description">
        <h5 className="tour-name">
          {tour.name}
        </h5>
        <span className="tour-price">{tour.price}</span>
          <p className="tour-info">{isShowMore ? tour.info.substring(0,200) + '...' : tour.info} <button onClick={toggleShowMore}>{isShowMore ? "Show more" : "Show less"}</button></p>
      </div>
        <button onClick={()=>{onDelete(tour.id)}}>Not interested</button>
    </article>
  )
}

export default Tour;

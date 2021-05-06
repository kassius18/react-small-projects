import {useState} from "react";
import "./Tour.css"

function Tour({tour, onDelete}){
  const [isShowMore, setIsShowMore] = useState(true)
  const toggleShowMore = () =>{
    setIsShowMore((prevValue) =>{return !prevValue})
  }

  return (
    <article className="tour card container mb-5 px-0 pb-3 shadow-lg border-0">
      <img src={tour.image} alt="" className="card-img-top"/>
      <div className="tour-description">
        <h5 className="tour-name d-inline-block ml-auto">
          {tour.name}
        </h5>
        <span className="tour-price bg-primary text-info">{tour.price}</span>
          <p className="tour-info text-secondary">{isShowMore ? tour.info.substring(0,200) + '...' : tour.info} <span className="link-primary" onClick={toggleShowMore}>{isShowMore ? "Read more" : "Read less"}</span></p>
      </div>
        <button onClick={()=>{onDelete(tour.id)}} className="btn btn-primary w-50 mx-auto">Not interested</button>
    </article>
  )
}

export default Tour;

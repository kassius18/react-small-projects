import {useState} from "react";

function Tour({key, tour}){
  const [isShowMore, setIsShowMore] = useState(true)
  const [info, setInfo] = useState(tour.info)
  console.log('initial state:',isShowMore)
  const toggleShowMore = () =>{
    setIsShowMore((prevValue) =>{return !prevValue})
    console.log('actual', isShowMore)
    if (isShowMore){
      setInfo(tour.info.substring(0,200) + "...")
    }else{
      setInfo(tour.info)
    }
    console.log(info)
  }

  return (
    <article className="tour">
      <img src={tour.image} alt=""/>
      <div className="tour-description">
        <h5 className="tour-name">
          {tour.name}
        </h5>
        <span className="tour-price">{tour.price}</span>
          <p className="tour-info">{info} <button onClick={toggleShowMore}>{isShowMore ? "Show less" : "Show more"}</button></p>
      </div>
      <button>Not interested</button>
    </article>
  )
}

export default Tour;

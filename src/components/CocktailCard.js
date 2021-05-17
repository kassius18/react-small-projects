import "./CocktailCard.scss"
import "./CocktailList.scss"

function CocktailCard({cocktail}){
  return (
    <div className="card">
      <img src={cocktail.image} alt="" className="card__image"/>
      <div className="card__body">
        <h3 className="card__name">{cocktail.name}</h3>
        <h4 className="card__glass">{cocktail.glass}</h4>
        <span className="card__alcoholic">{cocktail.info}</span>
        <button className="card__btn">details</button>
      </div>
    </div>
  )

}

export default CocktailCard

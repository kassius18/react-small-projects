import {useEffect, useState} from 'react'
import './Search.scss'
import {useFetchCocktails} from '../context'
import CocktailCard from "./CocktailCard"
import Animation from "./Animation"

function Search(){
  const [currentValue, setCurrentValue] = useState("")
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  const {isLoading, cocktails} = useFetchCocktails(url + currentValue)

  console.log(cocktails)
  return(
    <>
    <section className="search">
      <input type="text" className="search__input" value={currentValue} onChange={(event)=>{
        setCurrentValue(event.target.value)}}/>
    </section>
    {isLoading ? 
      (<Animation/>)
      : 
      (<section className="cocktail__list">
        {cocktails.length > 0 ? 
            (cocktails.map((cocktail)=>{return <CocktailCard key={cocktail.id} cocktail={cocktail}/>}))
          :
            (<h1>No cocktails found </h1>)
        }
      </section>)
    }
    </>
  )
}

export default Search

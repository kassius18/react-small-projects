import React, {useEffect, useState} from 'react'

export const AppContext = React.createContext()

function useFetchCocktails(url){
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
      setIsLoading(false)
    }

    fetchData()
    setIsLoading(true)
  }, [url])

  let cocktails = []
  if (!isLoading){
    if (data.drinks){
      cocktails = data.drinks.map((cocktail) => {return {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        info: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        image: cocktail.strDrinkThumb
      }})
    }
  }

  return {isLoading, cocktails}
}

export {useFetchCocktails}

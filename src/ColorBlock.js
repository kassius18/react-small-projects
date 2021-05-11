import {useEffect, useState} from 'react'
import './ColorBlock.css'

function ColorBlock({color, weight}){
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = (color)=>{
    navigator.clipboard.writeText(color)
    setIsCopied(true)
    setTimeout(()=>{setIsCopied(false)}, 2500)
  }

  return (<>
    <div onClick={()=>{handleClick(color)}} className="colors-block" style={{backgroundColor: color}}>
      {isCopied && "Copied to Clipboard"}
      {weight}
      {color}
    </div>
    </>)

}

export default ColorBlock

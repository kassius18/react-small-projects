import logo from './images/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Header.scss"
import Submenu from "./Submenu"
import {useEffect, useRef, useState} from 'react'


function Header({sublinks}){
  const [isSubmenuShown, setIsSubmenuShown] = useState(false)
  const [submenuContent, setSubmenuContent] = useState({links:[], pages:""})
  const [position,setPosition] = useState({left: "auto"})
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const modalEl = useRef()

  useEffect(()=>{
    const  handleResize= ()=>{
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize',handleResize)
    return ()=>{window.removeEventListener('resize',handleResize)}
  })

  const handleMouseEnter = (event) =>{
    const buttonId = event.target.id
    if (event.target.matches("button")){
      setIsSubmenuShown(true)

      setSubmenuContent(sublinks.find(
        (sublink) => sublink.page === buttonId))

      if(buttonId === "products"){
        setPosition({left: 80})
      }else if (buttonId === "developers"){
        setPosition({left: 240})
      }else if (buttonId === "company"){
        setPosition({left: 400})
      }
    }
  }

  return (
    <>
    <header className="top-header">
      <img src={logo} alt="" className="top-header__logo"/>
      {windowSize < 800 ? 
          (<GiHamburgerMenu onClick={()=>{modalEl.current.classList.toggle("visible")
          }}/>) :
          <>
          <div className="top-header__navbar" onMouseMove={handleMouseEnter} onMouseLeave={()=>{setIsSubmenuShown(false)}} >{sublinks.map((sublink)=>{return <button id={sublink.page} key={sublink.page} className="top-header__nav">{sublink.page}</button>})}
          <Submenu content={submenuContent} style={position} visible={isSubmenuShown}/>
        </div>
          <div className="top-header__sign-in">Sign in</div>
          <div className="top-header__hamburger" style={{display: "none"}}></div>
          </>
      }
        </header>
    <div className="modal" ref={modalEl}>
      <div className="modal__container">
      <MdClose onClick={()=>{modalEl.current.classList.toggle("visible")}}/>
      {sublinks.map((sublink)=>{
        const {page, links} = sublink
        console.log(links)
        return (
          <>
          <div className="modal__page">{page}</div>
          <div className="modal__links">
            {links.map((link)=>{
              return <a href={link.url}>{link.icon}{link.label}</a>
            })}
          </div>
          </>
        )
      })}
      </div>

    </div>
    </>
  )

}

export default Header

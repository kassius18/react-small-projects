import {links, social} from './data'
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa'
import './Header.css'
import {useEffect, useRef, useState} from 'react'

function Header(){
  const windowResponsiveLimit = 800
  const navbar = useRef()
  const[windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleSizeChange = ()=>{
      setWindowWidth(window.innerWidth)
    }

    if (windowWidth < windowResponsiveLimit){
      navbar.current.classList.add("top-header__navbar--responsive")
      navbar.current.classList.add("hide")
    }else{
      navbar.current.classList.remove("hide")
      navbar.current.classList.remove("top-header__navbar--responsive")
    }

    window.addEventListener('resize', handleSizeChange)
    return ()=>{window.removeEventListener('resize', handleSizeChange)}
  })

  const toggleNavbar = () => {
    navbar.current.classList.toggle('hide')
  }

  return(
    <header className="top-header">
      <div className="top-header__container">
        <img src={logo} alt="" className="top-header__logo"/>
        <div ref={navbar} className="top-header__navbar">
          {links.map((link) => {
            return <a key={link.id} href={link.url}>{link.text}</a>
          })}
          </div>
          { windowWidth <= windowResponsiveLimit ? (<div className="top-header__menu" onClick={toggleNavbar}><FaBars/></div>) : (
            <div className="top-header__social">
              {social.map((socialIcon) => {
                return <a key={socialIcon.id} href={socialIcon.url}>{socialIcon.icon}</a>
              })}
                </div>)}
              </div>
              </header>)
}

export default Header

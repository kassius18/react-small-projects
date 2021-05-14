import './App.scss';
import logo from './logo.svg'
import {links, social} from './data'
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from 'react';

function App() {
  const [showSidebar, setShowSidebar]  = useState(false)
  const [showModal, setShowModal]  = useState(false)
  return (
    <>
    <GiHamburgerMenu className="sidebar__hamburger" onClick={()=>{setShowSidebar(true)}}/>
    <div className={showSidebar ? "sidebar sidebar--show" : "sidebar"}>
      <div className="sidebar__top">
      <img src={logo} alt="" className="sidebar__logo"/>
      <MdClose onClick={()=>{setShowSidebar(false)}}/>
      </div>
      <div className="sidebar__nav">
        {links.map((link) => {
          return (<a key={link.id} className={"sidebar__${home}"} href={link.url}>{link.icon}<span>{link.text}</span></a>)
        })}
      </div>
      <div className="sidebar__social">
        {social.map((singleSocial) => {
          return (<a key={singleSocial.id} href={singleSocial.url}>{singleSocial.icon}</a>)
        })}
      </div>
    </div>
    <div className="modal-btn" onClick={()=>{setShowModal(true)}}>SHOW MODAL</div>
    {showModal &&
    <div className="modal">
      <div className="modal__content">
        <MdClose onClick={()=>{setShowSidebar(false)}}/>
        <h2>Modal Content</h2>
      </div>
    </div>}
    </>
  );
}

export default App;

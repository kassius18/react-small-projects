import "./Submenu.scss"

function Submenu({content, style, visible}){
  const {links, page} = content

  return (
    <div className={`submenu${ visible ? "" : " hide"}`} style={style}>
      <div className="submenu__page">{page}</div>
      <div className="submenu__links">
        {links.map((link) => {return (<a href={link.url}>{link.icon}{link.label}</a>)})}
      </div>
    </div>
  )
}

export default Submenu

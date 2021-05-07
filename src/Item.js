function Item({item}){
  return(
    <article className="item">
      <img src={item.img} alt="" className="item-image"/>
        <h1 className="item-title">{item.title} <span className="item-price">{item.price}</span></h1>
          <p className="item-description">{item.desc}</p>
    </article>

  )
}
export default Item;

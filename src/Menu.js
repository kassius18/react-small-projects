import Item from './Item'

function Menu({items}){
  const allItems = items.map((item)=> <Item item={item}/>)

  return (<section>
    {allItems}
    </section>)
}
export default Menu

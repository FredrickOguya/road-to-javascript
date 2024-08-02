import LineItem from './LineItem'

const ItemLists = ({ items,setItems,handlecheck,handleDelete }) => {
  return (
    <ul>
            {items.map((item)=>(
              <LineItem
                key={item.id}
                item={item}
                handlecheck={handlecheck}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
  )
}

export default ItemLists





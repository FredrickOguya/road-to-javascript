import ItemLists from './ItemLists'
const Content = ({items,setItems,handlecheck,handleDelete}) => {
  
  
    
  return (
    <main>
      {items.length ? (
          <ItemLists
          items={items}
          handlecheck={handlecheck}
          handleDelete={handleDelete}
          />
      ) : (
        <p style={{marginTop:'2rem'}}>Your list is emptty.</p>
      )}
    </main>
  )
}

export default Content

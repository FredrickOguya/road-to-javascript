import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({ item,setItems,handlecheck,handleDelete }) => {
  return (
    <li className="item" key={item.id}>
                <input type="checkbox"
                onChange={()=>handlecheck(item.id)}
                checked={item.checked}
                />
                <label
                  onDoubleClick={()=>handlecheck(item.id)}
                  style={(item.checked) ? {textDecoration:'line-through'}:null}
                >{item.item}</label>
                <FaTrashAlt 
                  onClick={()=>handleDelete(item.id)}
                  role="buttom" 
                  tabIndex="0" 
                  aria-label={`Delete ${item.item}`}
                />
    </li>
  )
}

export default LineItem

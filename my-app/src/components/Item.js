
import { useState } from 'react';

import './Item.css';
const Item = (props) => {


  const[ItemName,setItemName] = useState(props.name)
  function click(){
    setItemName('Salman Khan')
  };
 
  return (
    <div>
        <h1 className='item'>{ItemName}

            <button onClick={click}>Click Me</button>
        </h1>
        
    </div>
  )
}

export default Item;

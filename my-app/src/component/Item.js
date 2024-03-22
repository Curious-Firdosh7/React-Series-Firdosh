import './Item.css';

function Item(props) {
    const itemName = props.name;
    return (
        <div>
             {/* {props.children};    */}
             <p className="react">{itemName}</p>
           
        </div>
   
    );
}
export default Item;
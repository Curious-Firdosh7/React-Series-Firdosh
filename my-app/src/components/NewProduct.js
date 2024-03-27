import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(props){

    function B(obj){
        console.log("I am Inside The New Product😍");
        console.log(obj);
        // calling Parent Function
        props.OnA(obj);
    }

    
    return(
        <div className = "new-product"> 
             <ProductForm OnB = {B}/>
        </div>
       
    )
}

export default NewProduct;
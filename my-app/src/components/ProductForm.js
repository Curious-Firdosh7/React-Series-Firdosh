import { useState } from 'react';

import './ProductForm.css';

function ProductForm(props){

    // Handeling Multiple Satate
    const[NewTitle,setTitle] = useState('');
    const[NewDate,setDate] = useState('');


    function TitleChangeHandler(event){
        // console.log("Title Change Karogre");
        // console.log(event.target.value)
         setTitle(event.target.value);
        
    };

    function DateChangeHandler(event){
        // console.log("Title Change Karogre");
        // console.log(event.target.value)
        // console.log("Printing Date And Title");

          setDate(event.target.value);


        // console.log(Date);
        // console.log(Title);        
    };

    function submitHandler(event){
        event.preventDefault();

       const obj = {
            Title:NewTitle, 
            Date:NewDate,
        };

        // console.log(obj);
         props.OnB(obj);
        
        setTitle('');
        setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className = "new-product-title"  >
                <lable> Title </lable>
                <input type="text" value={NewTitle} onChange={TitleChangeHandler} ></input>
            </div>

            <div className = "new-product-date">
                <lable> Date  </lable>  
                <input type="date" value={NewDate}  onChange={DateChangeHandler}  min="2023-01-01" max = "2023-12-12"></input>         
             </div>

             <div className = "new-product-button">
                <button type ="submit" onClick={submitHandler}>
                    Add Product
                </button>
             </div>
        </form>
    )
}

export default ProductForm;
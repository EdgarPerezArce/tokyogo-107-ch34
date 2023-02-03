import './product.css';
import QuantityPicker from './quantitypicker';
import { useEffect } from 'react';
import { useState } from 'react';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    useEffect(function(){
        console.log("Hello, I'm a product!");

    },[]);
    

    function onQuantityChange(qty){
        console.log("new value:" + qty);
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function addProduct(){
        console.log("Adding" + quantity + "" + props.data.title);

    }

    return (
        <div className = "product">
            <img src={"/images/" + props.data.image} atl=""></img>
            
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>${ getTotal() }</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>
            

            
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className='addbutton'>Add</button>
        </div>

        
    );
}

export  default Product;
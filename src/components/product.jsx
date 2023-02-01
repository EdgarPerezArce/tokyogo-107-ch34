import './product.css';
import QuantityPicker from './quantitypicker';
import { useEffect } from 'react';

function Product(props) {

    useEffect(function(){
        console.log("Hello, I'm a product!");

    },[]);
    return (
        <div className = "product">
            <img src={"/images/" + props.data.image} atl=""></img>
            
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>${props.data.price.toFixed(2)}</label>
                <label>${props.data.price}</label>
            </div>
            

            
            <QuantityPicker></QuantityPicker>
            <button className='btn btn-outline-primary'>Add</button>
        </div>


    );
}

export  default Product;
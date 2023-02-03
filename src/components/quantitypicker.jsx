 import "./quantitypicker.css";
 import { useState } from "react";

 
 
 function  QuantityPicker(props) {
    let [quantity, setQuantity] = useState(1);

    function decrease() {
        if (quantity === 1) return;

        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);// notify the parent

    }
    function increase() {
        // don't allow the number to go below 1
        let val = quantity + 1;
        setQuantity(val);
    }
    return (
        <div className="qt-picker">
            <button className='quantitybutton' disabled={quantity === 1}onClick={decrease} >-</button>
            <label>{quantity}</label>
            <button className = 'quantitybutton' onClick={increase} >+</button>
        </div>    


    );
 }

 export default QuantityPicker;
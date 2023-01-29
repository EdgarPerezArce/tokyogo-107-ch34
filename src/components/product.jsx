import './product.css';
import QuantityPicker from './quantitypicker';

function Product() {
    return (
        <div className = "product">
            <img src="https://picsum.photos/220/180" atl=""></img>
            
            <h5>Title Goes Here</h5>

            <div className="prices">
                <label>Total</label>
                <label>Price</label>
            </div>
            

            
            <QuantityPicker></QuantityPicker>
            <button className='btn btn-outline-primary'>Add</button>
        </div>


    );
}

export  default Product;
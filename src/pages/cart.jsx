import { Link } from "react-router-dom";
import "./cart.css";
import { useContext } from 'react';
import DataContext from "../store/dataContext";


function Cart() {

    const cart = useContext(DataContext).cart;
    return(
        <div className="cart">
            <h1>Irasshaimase!</h1>
            <h4>You have {cart.length} products in the cart</h4>
        
     {cart.map((prod) => (
     <div className="prod-row">
     <img src={'/images/' + prod.image} alt=""></img>
     </div>))}
        

            <Link className='btn btn-primary' to="/catalog">Check out the Goods</Link>
        </div>

    );
}

export default Cart;
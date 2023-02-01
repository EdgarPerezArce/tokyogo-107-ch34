import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);
    // const products = []

    // when the component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        // get the products from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);// put the results into the state var
    }

    function magicTest() {
        console.log("Blamo, Behold!");
        setProducts([]);
    }

    return (
        <div>
            <h1>Check out The goods</h1>
                <h5>We have {products.length} products ready for you!</h5>
                <button onClick={magicTest}>Magic</button>
                <br />

            {products.map( p => <Product data={p}></Product>)}
            
        </div>
    );
}

export default Catalog;

// below the heading 5, create a button
// when clicked, call a magicTest function
// console log a message


//when the Product component loads,
//console log a "Hello, I'm a product" message

/*
 * 
 * create a Product component with h5 for the title
 * render a <qualityPicker> compnenet inside Product
 * 
 * on catalog
 * Render 5 time the <Product> tag
 */
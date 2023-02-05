import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState ([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);
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
        setProdsToDisplay(prods);
        let cats = ["keychain", "stickers", "shirts", "shoes"];
        setCategories(cats);
    }

    function filter (category){
        console.log(category);
        let list = [];
        for(let i=0; i< products.length; i++) {
            let prod = products[i];
            if(prod.category === category) {
                list.push(prod);
            }
        }

        setProdsToDisplay(list);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }

    return (
        <div className="productheader">
            <h1>Irasshaimase! New Merch Available!</h1>
                <h5>We have {products.length} products ready for you!</h5>
               
                <button onClick={clearFilter} className='allbutton' >All</button>
                {categories.map(c => <button key={c} onClick={() => filter(c) } className="catagorybutton">{c}</button>)}
                <br />

            {prodsToDisplay.map( p => <Product key={p._id} data={p}></Product>)}
            
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
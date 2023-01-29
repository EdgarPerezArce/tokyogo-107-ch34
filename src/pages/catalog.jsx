import Product from "../components/product";
import "./catalog.css";

function Catalog() {


    
    return (
        <div>
            <h1>Check out The goods</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;

/*
 * 
 * create a Product component with h5 for the title
 * render a <qualityPicker> compnenet inside Product
 * 
 * on catalog
 * Render 5 time the <Product> tag
 */
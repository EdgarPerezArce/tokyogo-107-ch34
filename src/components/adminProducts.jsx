import "./adminProducts.css"
import { useState } from "react";

function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name;

        // create a copy, modify the copy, set the copy back
        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        // todo: fix the price, should be a number

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return <div className="ad-products">
        <h3>Create New Product
        </h3>

        <div className="my-control">Title:
        <label className="form-label"></label>
        <input name="title" onChange={textChanged}className="form-control"type="text" />
        </div>

        <div className="my-control">Category:
        <label className="form-label"></label>
        <input name="category" onChange={textChanged}className="form-control" type="text" />
        </div>

        <div className="my-control">Image name:
        <label className="form-label"></label>
        <input name="image" onChange={textChanged} className="form-control"type="text" />
        </div>

        <div className="my-control">Price:
        <label className="form-label"></label>
        <input name="price" onChange={textChanged}className="form-control"type="number" />
        </div>

        <div className="my-control center">
            <button onClick={saveProduct} className="btn btn-dark">Save Product</button>
        </div>

        <ul>
            {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
        </ul>
    </div>
}

export default AdminProducts;
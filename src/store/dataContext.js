//Interface

import { createContext } from "react";

//Interface, promise, blueprints
// should not have any values or implimentaions
// just describe the structure of the data

const DataContext = createContext({
    cart: [],
    user: {},
    //functions
    addProductsToCart: () => {},
    removeProductsFromCart: () => {}
});

export default DataContext;
var catalog = [
    {
        "_id": "1",
        "title": "Key Chains",
        price: 15.99,
        image: "keychain.jpg",
        category: "keychain",
    },
    {
        "_id": "2",
        "title": "Stickerpack1",
        price: 12.99,
        image: "animestickers.jpg",
        category: "stickers",
    },
    {
        "_id": "3",
        "title": "Stickerpack2",
        price: 12.99,
        image: "otakustickers.jpg",
        category: "stickers",
    },
    {
        "_id": "4",
        "title": "Ramen Shirt",
        price: 12.99,
        image: "ramenshirt.jpg",
        category: "shirts",
    },
    {
        "_id":"5",
        "title": "Dragon T",
        price: 12.99,
        image: "dragonshirt.jpg",
        category: "shirts",
    },
    {
        "_id": "6",
        "title": "Otaku",
        price: 12.99,
        image: "otakushirt.jpg",
        category: "shirts",
    },
    {
        "_id": "7",
        "title": "Tanjiro High Tops",
        price: 12.99,
        image: "tanjiroshoes.jpeg",
        category: "shoes",
    },
    {
        "_id": "8",
        "title": "Gojo Low Tops",
        price: 12.99,
        image: "gojoshoes.jpg",
        category: "shoes",
    },
];

class DataService {
     

    getProducts() {
        // TODO: connect to server and retrieve products to display

        return catalog;
    }

}


export default DataService;
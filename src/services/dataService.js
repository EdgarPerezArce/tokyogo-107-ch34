var catalog = [
    {
        "_id": "keychain",
        "title": "Key Chains",
        price: 15.99,
        image: "keychain.jpg",
        category: "keychain",
    },
    {
        "_id": "stickerpack1",
        "title": "Stickerpack1",
        price: 12.99,
        image: "animestickers.jpg",
        category: "stickers",
    },
    {
        "_id": "astickerpack2",
        "title": "Stickerpack2",
        price: 12.99,
        image: "otakustickers.jpg",
        category: "sticikers",
    },
    {
        "_id": "ramenshirt",
        "title": "Ramen Shirt",
        price: 12.99,
        image: "ramenshirt.jpg",
        category: "shirts",
    },
    {
        "_id":"dragonshirt",
        "title": "Dragon T",
        price: 12.99,
        image: "dragonshirt.jpg",
        category: "shirts",
    },
    {
        "_id": "otakushirt",
        "title": "Otaku",
        price: 12.99,
        image: "otakushirt.jpg",
        category: "shirts",
    },
    {
        "_id": "",
        "title": "Tanjiro High Tops",
        price: 12.99,
        image: "tanjiroshoes.jpeg",
        category: "shoes",
    },
    {
        "_id": "gojoshoes",
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
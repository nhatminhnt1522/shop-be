
const Product = require('../models/ProductModel')
const mongoose = require("mongoose");

const productSeeder = async () => {

    const products = [
        // { name: 'Macbook 2016', type: 'Laptop', image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r8cpct3J3EtmhfImzz91t0bxAILqveaBdQ&usqp=CAU`, price: 6700000, countInStock: 514, rating: 42 },
        // { name: 'Macbook Pro 2018', type: 'Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTechSt2Y5iGCJsi0oAxEnTgwXUCbHgKbP31dDhfCLm90OKKiTZyLe6comBbIpuL6H-0u4&usqp=CAU', price: 9500000, countInStock: 723, rating: 4.3 },
        // { name: 'Macbook Air 2019', type: 'Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPz1mxSPCxHWWD1GYnahBTX7FlhKsjDLkkQ&usqp=CAU', price: 12990000, countInStock: 898, rating: 4.5 },
        // { name: 'Macbook M1 2020', type: 'Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm81K3B36XHbk1invfkNomMwNzh2chf_GYA&usqp=CAU', price: 13590000, countInStock: 768, rating: 4.2 },
        // { name: 'iPhone 15', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSAHlMVh3q5108cXcCs_AeRcR8vEleLjvTQ&usqp=CAU', price: 28990000, countInStock: 0, rating: 0 }
        // { name: 'iPhone 14', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViDy5Lo-t-GdOb42NkiO4wOhs9-GypbM3Cw&usqp=CAU', price: 18800000, countInStock: 250, rating: 4.6 },
        // { name: 'iPhone 13', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HIIgv3b9E3TR_21kgFfw1xcwFUY04VLEaQ&usqp=CAU', price: 16990000, countInStock: 215, rating: 4.1 },
        // { name: 'iPhone 12', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLzPV5cqHJmLV-G_-5UxGsj5mBl3I6Q-qyA&usqp=CAU', price: 14690000, countInStock: 258, rating: 4.5 },
        // { name: 'iPhone 11', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1E_JE8GrunY-jAj4SxbgSPNjQbUnI2K684CrKqq6D1GpaUCoLneZbB9u9-lYlI99ca0&usqp=CAU', price: 8990000, countInStock: 164, rating: 4.8 },
        // { name: 'iPhone 10', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ195UxJpDNlEnQije9hsGmkaOxjBF0x9i-dg&usqp=CAU', price: 5990000, countInStock: 0, rating: 0 },
        // { name: 'iPhone 8', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQRsz8lpYdQAWbp5DahLGFdzzlVsZj4dhCw&usqp=CAU', price: 3990000, countInStock: 59, rating: 4.8 }
        { name: 'iPhone 7', type: 'Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBbAZ8oC4elUDTsaqWzDApwLno4G4OvEQEg&usqp=CAU', price: 2590000, countInStock: 28, rating: 4.5 }
    ]

    await mongoose.connect(`mongodb+srv://minhntn19010065:D9apYddeM55HI7BB@cluster0.gfw70j3.mongodb.net/?retryWrites=true&w=majority`);

    await Product.insertMany(products)
}

module.exports = productSeeder;
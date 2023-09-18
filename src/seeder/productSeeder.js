
const Product = require('../models/ProductModel')
const mongoose = require("mongoose");

const productSeeder = async () => {

    const products = [
        { name: 'Macbook 2016', type: 'Laptop', image: `https://synnexfpt.com/wp-content/uploads/2022/07/refurb-macbook-air-silver-m1-202010_AV1.jpeg`, price: 150, countInStock: 999, rating: 4 },
        { name: 'Macbook Pro 2018', type: 'Laptop', image: 'https://synnexfpt.com/wp-content/uploads/2022/07/refurb-macbook-air-silver-m1-202010_AV1.jpeg', price: 150, countInStock: 999, rating: 4 },
        { name: 'Macbook Air 2019', type: 'Laptop', image: 'https://synnexfpt.com/wp-content/uploads/2022/07/refurb-macbook-air-silver-m1-202010_AV1.jpeg', price: 150, countInStock: 999, rating: 4 },
        { name: 'Macbook M1 2020', type: 'Laptop', image: 'https://synnexfpt.com/wp-content/uploads/2022/07/refurb-macbook-air-silver-m1-202010_AV1.jpeg', price: 150, countInStock: 999, rating: 4 },
        { name: 'iPhone 15', type: 'Phone', image: 'https://synnexfpt.com/wp-content/uploads/2022/07/refurb-macbook-air-silver-m1-202010_AV1.jpeg', price: 150, countInStock: 999, rating: 4 }
    ]

    await mongoose.connect(`mongodb+srv://minhntn19010065:D9apYddeM55HI7BB@cluster0.gfw70j3.mongodb.net/?retryWrites=true&w=majority`);

    await Product.insertMany(products)
}

module.exports = productSeeder;

const Product = require('../models/ProductModel')
const mongoose = require("mongoose");

const productSeeder = async () => {

    const products = [
        { name: 'MacBook Air M1 256GB 2020', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png`, price: 18990000, countInStock: 23, rating: 4.2 },
        { name: 'Macbook Air M2 2022 8GB', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m22.png`, price: 26690000, countInStock: 26, rating: 4.5 },
        { name: 'Macbook Pro 13 M2 2022', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/r/pro-m2.jpg`, price: 29490000, countInStock: 28, rating: 4.6 },
        { name: 'MacBook Pro 14 inch M2 Pro 2023', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/2/m2_pro_14.png`, price: 47990000, countInStock: 35, rating: 4.1 },
        { name: 'Macbook Air M2 2022', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2_16gb.png`, price: 31990000, countInStock: 15, rating: 4.6 },
        { name: 'Macbook Pro 14 M1 Pro', type: 'Mac', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/mac_pro.png`, price: 45590000, countInStock: 25, rating: 4.6 },
        { name: 'iPhone 14 Pro Max 128GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png`, price: 25990000, countInStock: 21, rating: 4.1 },
        { name: 'iPhone 13 128GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg`, price: 16190000, countInStock: 28, rating: 4.5 },
        { name: 'iPhone 14 128GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg`, price: 18790000, countInStock: 16, rating: 4.8 },
        { name: 'iPhone 12 128GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_241_2.jpg`, price: 14890000, countInStock: 10, rating: 4.6 },
        { name: 'iPhone 11 128GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_187_1.jpg`, price: 11990000, countInStock: 29, rating: 4.8 },
        { name: 'iPhone 13 Pro Max 256GB', type: 'iPhone', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_66_6_2_1_12.jpg`, price: 26590000, countInStock: 28, rating: 4.5 },
        { name: 'Airpods Pro 2022', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_111_5_.png`, price: 5890000, countInStock: 23, rating: 4.3 },
        { name: 'AirPods 2', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png`, price: 2630000, countInStock: 27, rating: 4.5 },
        { name: 'AirPods 3 2022', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_170_1_1.png`, price: 4250000, countInStock: 12, rating: 4.6 },
        { name: 'AirPods 3 MagSafe', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_170_9.png`, price: 4390000, countInStock: 8, rating: 4.8 },
        { name: 'AirPods Pro 2021 Magsafe', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_168_1__1.png`, price: 5090000, countInStock: 5, rating: 4.1 },
        { name: 'EarPods Lightning', type: 'Airpods', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame_3_3.png`, price: 490000, countInStock: 16, rating: 4.4 },
        { name: 'iPad 10.2 2021', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_mmas.png`, price: 7590000, countInStock: 36, rating: 4.1 },
        { name: 'iPad Pro 11', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-pro-13-select-wifi-spacegray-202210-02.jpg`, price: 20290000, countInStock: 8, rating: 4.8 },
        { name: 'iPad Air 5 10.9 inch', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_253_3.jpg`, price: 13690000, countInStock: 14, rating: 4.2 },
        { name: 'iPad Gen 10 10.9 inch', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-2022-hero-silver-wifi-select.png`, price: 11290000, countInStock: 6, rating: 4.6 },
        { name: 'iPad mini 6', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_229.jpg`, price: 11090000, countInStock: 26, rating: 4.5 },
        { name: 'iPad Air 5 10.9 inch', type: 'iPad', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_253_8.jpg`, price: 20990000, countInStock: 18, rating: 4.5 },
        { name: 'Apple Watch SE 2022', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se.png`, price: 5990000, countInStock: 23, rating: 4.6 },
        { name: 'Apple Watch Series 8', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_1_.png`, price: 9090000, countInStock: 14, rating: 4.3 },
        { name: 'Apple Watch SE 2022', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_se_44.png`, price: 6750000, countInStock: 28, rating: 4.5 },
        { name: 'Apple Watch Series 8 viền nhôm', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_2_.png`, price: 8990000, countInStock: 25, rating: 4.4 },
        { name: 'Apple Watch Series 7', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_gps_7_.png`, price: 7690000, countInStock: 6, rating: 4.8 },
        { name: 'Apple Watch SE', type: 'Watch', image: `https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/p/apple_lte_14_.png`, price: 7290000, countInStock: 4, rating: 4.5 }
    ]

    await mongoose.connect(`mongodb+srv://minhntn19010065:D9apYddeM55HI7BB@cluster0.gfw70j3.mongodb.net/?retryWrites=true&w=majority`);

    await Product.insertMany(products)
}

module.exports = productSeeder;
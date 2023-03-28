import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required: true,
        unique: true,
    },
    image: String,
    title: String,
    price: Number,
    category: String,
    description: String,
    rating: Object,
    count: Number,
    rate: Number,
})

const Product = mongoose.model('product', productSchema);

export default Product;
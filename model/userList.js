import mongoose from "mongoose";

const userListSchema = new mongoose.Schema({
    id: {
        type:String,
        required: true,
        unique: true,
    },
    image: String,
    gender: String,
    password: Number,
    email: String,
    name: String,
    phone: Number,
})

const User = mongoose.model('userlist', userListSchema);

export default User;
import { products } from "./constants/data.js";
import Product from "./model/productSchema.js";


const DefaultData = async () =>{
    try{
        await Product.insertMany(products);
        console.log("data connected succesfully")
    }catch(error){
        console.log("error while inserting default data", error)
    }
}

export default DefaultData;





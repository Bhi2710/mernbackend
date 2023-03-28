import { userList } from "./constants/userListdData.js";
import User from "./model/userList.js";


const UserListData = async () => {
    try{
        await User.insertMany(userList);
        console.log("data connected succesfully")
    }catch(error){
        console.log("error while fetching userlistdata", error)
    }
}

export default UserListData;
import { IUser } from "./user.interface";
import User from "./user.model";

//    create new user 
  export  const createUserToDb = async(payload : IUser) : Promise<IUser> =>{
    const user = new User (payload);
    await user.save()
    return user ;
   };

//    get users from DB 
export const getUsers = async () : Promise<IUser[] | []> => {
    const users = User.find();
    return users ;
}
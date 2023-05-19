import { IUser } from "./user.interface";
import User from "./user.model";

//    create new user 
  export  const createUserToDb = async(payload : IUser) : Promise<IUser> =>{
    const user = new User (payload); // User => class , user => instance
    await user.save() // eta hocce instance method
   console.log(user.fullName()); //custom instance method
    return user ;
   };

//    get users from DB 
export const getUsers = async () : Promise<IUser[] | []> => {
    const users = await User.find();
    return users ;
};

// get single user from DB 
export const getUserFromDB = async(payloadId : number) : Promise<IUser | null> =>{
    const user = await User.findOne({id:payloadId});
    return user ;
};
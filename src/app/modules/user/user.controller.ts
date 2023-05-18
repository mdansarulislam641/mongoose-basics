import { Request, Response } from "express";
import { createUserToDb, getUsers } from "./user.service";

// create new user 
export const createUser = async(req : Request, res : Response) => {
    const data = req.body ;
    const user = await createUserToDb(data);
    res.status(200).json({
        status: 'success',
        data : user
    })
};

// get users 
export const getUsersFromDb = async(req: Request , res : Response) =>{
    const users = await getUsers();
    res.status(200).json({
        status : "success",
        data : users
    })
};
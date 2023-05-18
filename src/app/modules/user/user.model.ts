import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// creating Schema 
const userSchema = new Schema<IUser>({
    id : {
        type: Number ,
        required: true ,
        unique : true
    } ,
    role: {
        type: String ,
        required: true
    },
    name : {
        firstName: {
            type : String ,
            required: true
        } ,
        lastName: {
            type: String
        } ,
        middleName: {
            type : String
         }
    },
    birthDate: {
        type: String 
    } ,
    gender: {
        type : String,
        enum: ['male', 'female m']
    },
    email:{
        type: String
    }, 
    presentAddress:{
        type: String ,
        required: true
    },
    permanentAddress:{
        type : String 
    },
    emergencyContact: {
        type : Number
    }
});

// creating model 
const User = model<IUser>('usersMongoose', userSchema);
export default User ;

import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

// creating Schema 
const userSchema = new Schema<IUser, UserModel ,IUserMethods>({
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

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

// creating model 
const User = model<IUser, UserModel>('usersMongoose', userSchema);
export default User ;


import express ,{ Application , Request , Response } from 'express';
import { Schema, model } from 'mongoose';
import cors from 'cors';

const app : Application = express()
// using cors policy 
app.use(cors());
// data parser 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req : Request, res : Response) => {
    // res.send('Hello World!')
    // data store into mongodb 
    /* 
    step -1 : Interface 
    step -2 : Schema
    step -3 : Model 
    step -4 : Database Query
    */
//    creating Interface of user 
    interface IUser {
        id : number ;
        role : 'student';
        name : {
            firstName : string ;
            middleName? : string ;
            lastName? : string 
        };
        gender : 'male' | 'female';
        email?:string ;
        birthDate?: string ;
        presentAddress : string ;
        permanentAddress : string ;
        emergencyContact: number
    };

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

    // creating user interface 
   const createUserToDb = async() =>{
    const user = new User ({
        id: 3 ,
        role: 'student',
        name :{
            firstName:'Md Ansarul',
            lastName: "Islam"
        },
        birthDate: '20-12-2023',
        email: 'abc@gmail.com',
        presentAddress :"Thakurgaon",
        permanentAddress : "Thangagonj",
        gender: 'male',
        
    });
    await user.save()
   };

   createUserToDb();
});

export default app ;
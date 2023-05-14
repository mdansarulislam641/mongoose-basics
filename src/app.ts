
import cors from 'cors';
import express ,{ Application , Request , Response } from 'express';

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
            middleName : string ;
            lastName : string 
        };
        gender : 'male' | 'female';
        email?:string ;
        birthDate?: string ;
    }
});

export default app ;
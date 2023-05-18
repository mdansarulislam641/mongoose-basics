
import express ,{ Application } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/user/user.route';

const app : Application = express()
// using cors policy 
app.use(cors());
// data parser 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/user', userRoutes)



    // res.send('Hello World!')
    // data store into mongodb 
    /* 
    step -1 : Interface 
    step -2 : Schema
    step -3 : Model 
    step -4 : Database Query
    */



export default app ;
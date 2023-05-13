
import cors from 'cors';
import express ,{ Application , Request , Response } from 'express';

const app : Application = express()
// using cors policy 
app.use(cors());
// data parser 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World!')
});

export default app ;
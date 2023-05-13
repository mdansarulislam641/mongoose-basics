import app from './app';
import mongoose from 'mongoose';
const port : number = 5000

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongodb-practice'); 
        console.log('database connection successfully');
        app.listen(port, () => {
            console.log(`Server app listening on port ${port}`)
        })

    } catch (error) {
        console.log(`Database connect fail`)
    }

}
main()


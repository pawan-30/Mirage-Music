// const URL = 'mongodb+srv://admin:admin123@mycluster.roficvt.mongodb.net/userdb?retryWrites=true&w=majority';
const URL = "mongodb+srv://abcd123:1111@cluster0.sf0swcf.mongodb.net/userdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
export default mongoose;
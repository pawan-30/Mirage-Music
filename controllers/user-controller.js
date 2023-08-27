import { UserModel } from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";
export const userController = {
    async login(request, response){
        const userInfo = request.body;
        // console.log(userInfo);
        try{
        //   const doc = await UserModel.findOne({}).exec();
        const doc = await UserModel.findOne({'email':userInfo.email}).exec();
        console.log('Doc is ', doc);
        if(doc){
            const plainPassword = userInfo.password;
            const dbPassword = doc.password;
            if(hashing.matchPassword(plainPassword, dbPassword)){
                response.json({message:'Welcome '+doc.name});
                console.log('registered');
            }
            else{
                response.json({message:'OOPS!!! Invalid Userid or Password'});
            }
        }
        else{
            response.json({message:'OOPS!!! Invalid Userid or Password'});
        }
    }
    catch(err){
        console.log('Error in Login ', err);
        response.json({message:'OOPS!!! Invalid Userid or Password'});
    }
        
    },
    async register(request, response){
        const userInfo = request.body;
        userInfo.password = hashing.passwordHash( userInfo.password);
       
        try{
        const doc = await UserModel.create(userInfo);
        if(doc){
            response.json({message:'Register SuccessFully',style:{color:'green'}});
        }
        else{
            response.json({message:'Problem in Register'});
        }
    }
    catch(err){
        console.log('Register Err ', err);
        response.json({message:'Problem in Register'});
    }
    }
   
}
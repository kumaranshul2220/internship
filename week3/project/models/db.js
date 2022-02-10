var mongoose=require('mongoose');


//schema
const dbSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        required:true
        },
    }
)


const userSchema=new mongoose.Schema(
    {
        name:String,
        age:Number,
        address:String,
        email:String,
        date:Date
    }
)

//module.exports=mongoose.model('testUsers',userSchema)
module.exports={
    "Users":mongoose.model('Users',dbSchema),
    "testUsers":mongoose.model('testUsers',userSchema)

}

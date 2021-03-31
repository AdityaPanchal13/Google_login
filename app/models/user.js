const mongoose=require ('mongoose')
const isEmail=require('validator/lib/isEmail')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    
    },
    password:{
        type:String,
    }
})
const User=mongoose.model('User',userSchema)

module.exports=User
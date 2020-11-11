const validator = require('validator')
const mongoose = require('mongoose')



const user = mongoose.model('user',{

    username:{
        type : String,
        lowercase : true ,
        trim : true,
        required : true
    },
    email : {
        type : String ,
        required : true ,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    password :{
        type : String,
        required : true,
        minlength : 7 ,
        trim : true,
        validator(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password Cannot Contain Password")
            }
        }
    }
    
})

module.exports = user
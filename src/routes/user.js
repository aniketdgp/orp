const express = require('express')
const router = new express.Router()
const user_model = require("../models/user")


//Create user 
router.get('/signup_submit',async (req,res)=>{
    
    const user = new user_model(req.query)

      try{
        await user.save()
        res.status(201).send(user)   

    }catch(e){
        res.status(400).send()
    }
})

module.exports = router

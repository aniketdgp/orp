require("./db/mongoose")
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const user_router = require("./routes/user")



//Setting up port for Heroku servers
const port = process.env.PORT || 3000

const app = express()
app.use(express.json()) //Brings the json response from client side


app.set('view engine','hbs')
app.use(user_router)

//setting dir address
const dir = path.join(__dirname,"../public")
const viewdir = path.join(__dirname,"../templates/view")
const pardir = path.join(__dirname,"../templates/partial")

//setting the directory for use
app.use(express.static(dir))
app.set('views',viewdir)
hbs.registerPartials(pardir)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))


app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.get('/reserve',(req,res)=>{
    res.render("reservation")
})

app.get('/sucess',(req,res)=>{
    res.render("sucess")
})





app.listen(port,()=>{
    console.log("Server is Up and Running on port :"+port)
})


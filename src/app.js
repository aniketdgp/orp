const path = require('path')
const express = require('express')
const hbs = require('hbs')


//Setting up port for Heroku servers
const port = process.env.PORT || 3000

const app = express()

app.set('view engine','hbs')

//setting dir address
const dir = path.join(__dirname,"../public")
const viewdir = path.join(__dirname,"../templates/view")
const pardir = path.join(__dirname,"../templates/partial")

//setting the directory for use
app.use(express.static(dir))
app.set('views',viewdir)
hbs.registerPartials(pardir)




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


app.listen(port,()=>{
    console.log("Server is Up and Running on port :"+port)
})


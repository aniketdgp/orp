const mongoose = require('mongoose')

const dburl = "mongodb://127.0.0.1:27017/orp"
const monguri = "mongodb+srv://aniketdgp:qwerty12345@cluster0.ipflo.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(monguri || dburl,{
    useNewUrlParser :true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify :false
})

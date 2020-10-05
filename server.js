const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
const fetch = require('./fetch')
const insert = require('./insert')
const update = require('./update')
const del = require('./delete')
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to Starwisp Industries"
    })
})
app.use('/fetch',fetch)
app.use('/insert',insert)
app.use('/update',update)
app.use('/delete',del)
app.listen(8080,()=>{
    console.log("App Running")
})

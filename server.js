
// require("dotenv").config({path: "./.env"});
const express = require("express");
const cors = require('cors')
const app = express()
const path = require('path')
require("dotenv").config()
// const bodyParser = require("body-parser")


//MIDDLEWARE
app.use(cors())


// app.use(bodyParser.urlencoded({ extended: true }));

//App Routes files

const houseRouter = require('./Routes/HouseListing/HLRoute')
const houseFetchRoute = require('./Routes/HouseFetchRoutes/HouseFetch')


//App route
app.use(houseRouter)
app.use(houseFetchRoute)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res)=>{
        res.send('API RUNNING')
    })
}


//server entry point
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is runnning on port: ${PORT}`)
})



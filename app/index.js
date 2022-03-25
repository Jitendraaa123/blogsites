const express = require('express')
const path = require('path');
const router = express.Router()
const app = express()
const Routes = require('./routes.js')
const DB= require("../database/connection")
const methodoverride= require("method-override")
const bodyparser = require("body-parser")
//const temple = path.join(__dirname,"./temple")
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodoverride('_method'))

app.set('view engine', "ejs");
app.use("/",Routes);
//app.get("/show/:id",Routes);
//app.get("/edit/:id",Routes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(` server started`)
  })
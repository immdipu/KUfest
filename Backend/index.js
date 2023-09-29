const express = require("express");
// const cors = require('cors');
// require('dotenv').config();
const fileUpload = require("express-fileupload");
const {dataFunction}= require("./data");
require("./config/database");
const tourist_route = require("./route/tourist.js");
const guide_route = require("./route/guide");
const city_route = require("./route/city");
const places_route = require("./route/places");
const hire_route = require("./route/hire");









const app =  express()
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());

// app.use(cors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   })); 
  

app.use("/api",tourist_route);

app.use("/api",guide_route);
app.use("/api", city_route);
app.use("/api", places_route)
app.use("/api", hire_route)



// app.use("/api",req_route);
// app.use("/api",donate_route);

// app.use("/api",apply_route);




app.use((req,res)=>{
    res.status(404).send({
        msg:"resource not found"
    })
})


app.use((err,req,res,next) => {
    let status = 500;
    let msg = "SERVER error";
    let errors = [];
    if (err.name === "ValidationError"){
      status = 400;
      msg = "bad request"
      
      let error_arr = Object.entries(err.errors)
      let temp = []
      error_arr.forEach(el => {
          let obj = {}
          obj.params = el[0]
          obj.msg = el[1].message
          temp.push(obj)
      }); 
      errors = temp;
  }
  res.status(status).send({msg: msg , errors,error:err.message})
  return;
  })


app.listen(8010, () => {
    console.log("server created");
})
 
dataFunction()

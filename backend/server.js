const express = require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const Post=require("./Models/weatherModel")
const postRoutes =require("./Routes/postRoutes")
const cors=require("cors")


dotenv.config();
app.use(cors({ origin: "*" })); 
app.use(express.json());  
app.use(postRoutes);


mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Running Successfully at port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  }); 

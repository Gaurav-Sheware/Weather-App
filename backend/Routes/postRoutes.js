const mongoose=require("mongoose");
const Post = require("../Models/weatherModel");
const express=require("express");

const router = express.Router();

//Create
router.post("/",async(req,res)=>
{
    const {title,text}=req.body;
    try {
        const PostData= await Post.create({
            title:title,
            text:text
        });
        res.status(201).json(PostData);
    } catch (error) {
        res.status(400).json({message:error.message});
    }   
});

//Get All
router.get("/", async (req, res) => {
    try {
        const showAll = await Post.find();
        res.status(200).json(showAll); 
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});


//Delete
router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const showDelete=await Post.findByIdAndDelete((_id=id));
    res.status(201).json(showDelete);
    } catch (error) {
        res.status(401).json({message:error.message});
    }
});


module.exports = router;
import express from "express";

const schedulrRouter = express.Router();

schedulrRouter.get("/",(req,res)=>{
    res.send("Welcome to the schedulr route");
});

export default schedulrRouter;
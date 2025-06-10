const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

let port=8080;

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/home",(req,res)=>{
    res.render("index.ejs");
});

app.get("/contect",(req,res)=>{
    res.render("contect.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.listen(port,()=>{
    console.log("app listing on port 8080");
});
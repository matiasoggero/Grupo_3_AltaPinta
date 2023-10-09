const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname, "views/index.html"));
})

app.get("/login",(req,res) =>{
    res.sendFile(path.join(__dirname, "views/login.html"));
})

app.get("/shoppingCart",(req,res) =>{
    res.sendFile(path.join(__dirname, "views/shoppingCart.html"));
})

app.get("/productDetail",(req,res) =>{
    res.sendFile(path.join(__dirname, "views/productDetail.html"));
})

app.get("/register",(req,res) =>{
    res.sendFile(path.join(__dirname, "views/register.html"));
})

const port = 3040;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
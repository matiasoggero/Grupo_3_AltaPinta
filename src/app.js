const express = require("express");
const path = require("path");

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) =>{
    res.render('index');
})

// app.get("/login",(req,res) =>{
//     res.render(path.join(__dirname, "views/login.html"));
// })

// app.get("/productCard",(req,res) =>{
//     res.render(path.join(__dirname, "views/productCard.html"));
// })

// app.get("/productDetail",(req,res) =>{
//     res.render(path.join(__dirname, "views/productDetail.html"));
// })

// app.get("/register",(req,res) =>{
//     res.render(path.join(__dirname, "views/register.html"));
// })

const port = 3040;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
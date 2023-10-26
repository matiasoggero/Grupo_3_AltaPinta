const express = require("express");
const path = require("path");

const mainRoutes = require('./routes/main');

const app = express();

// configuracion para usar ejs en lugar de html
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use('/', mainRoutes); 

 app.get("/login",(req,res) =>{
     res.render("login");
})

app.get("/productCart",(req,res) =>{
    res.render("productCart");
})


app.get("/register",(req,res) =>{
    res.render("register");
})

app.post("/register",(req,res) =>{
    res.redirect("/");
})

 app.post("/login",(req,res) =>{
     res.redirect("/");
})

const port = 3040;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
const express = require("express");
const path = require("path");

const authMiddlewares = require("./middlewares/auth");
const commonRoutes = require("./routes/common");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

// configuracion para usar ejs en lugar de html
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(
  sessions({
    secret: "12345678",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15000,
    }
  })
);
app.use(authMiddlewares.authUserInfo);
app.use(cookieParser());
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/", commonRoutes);

// app.use("/guest", require("./routes/guest"));

const port = 3040;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});



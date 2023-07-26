const dbconection= require("./src/db/config");
dbconection();

const express = require("express");

const app = express ();

app.use(express.json());

app.use("/api/auth",require("./src/routes/auth.routes"));
app.use("/api/products", require("./src/routes/products.routes"));

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})








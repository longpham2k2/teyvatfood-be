import express from "express";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App started and is running on port ${port}`);
});

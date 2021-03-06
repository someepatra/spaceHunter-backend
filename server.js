/*======================
      DEPENDENCIES 
========================*/
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

/*======================
      CONTROLLERS
========================*/
const PORT =  process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/rental'
const rentalController = require("./controller/rentalSpace.js");

/*======================
      WHITELIST 
========================*/
const whitelist = [
  "http://localhost:3000",
  "https://spacehunter-backend.herokuapp.com"
];
/*======================
        CORS
========================*/
const corsOptions = {
  origin: (origin, callback) => {
    if (true) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
/*======================
      MIDDLEWARE
========================*/
app.use(express.json());
app.use(cors(corsOptions));
app.use("/rental", rentalController);

// //test
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

/*======================
        MONGOOSE 
========================*/
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

/*======================
         LISTEN 
========================*/
app.listen(PORT, () => {
  console.log(" Listinging", PORT);
});

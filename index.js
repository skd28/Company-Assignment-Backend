const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config();
const app = express();

app.use(express.json());


connectDB();


app.use("/api/books", require("./routes/bookRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

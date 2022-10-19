require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middle ware
app.use(express.json());
app.use(cors());

const port = process.env.port || 5000;
app.listen(port, console.log(`server listening to port asdf 5000`));
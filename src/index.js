const express = require("express");
const cors = require("cors");
const mysql = require ("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json({limit:"100mb"}));
dotenv.config();

mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASS,
});
const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>{
    console.log("Se ha conectado al puerto" + PORT);
});


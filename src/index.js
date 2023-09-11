const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json({ limit: '100mb' }));

async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERM,
    password: process.env.PASS,
  });

  await connection.connect();
  console.log(`Conexión establecida ${connection.threadId}`);
  return connection;
}

connectDB();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log('Se ha conectado al puerto' + PORT);
});

server.get('/api/allprojects', async (req, res) => {
    const select = 'SELECT * FROM projects ';
    const connect = await connectDB();
    const [result] = await connect.query(select);
    console.log(result);
    res.json(result);
});

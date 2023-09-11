const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json({ limit: '100mb' }));
server.set('view engine', 'ejs');

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

server.post('/api/projects/add', async (req, res) => {
  const body = req.body;
  let insertAutor = 'INSERT INTO Autor (autor, job, photo) VALUES (?, ?, ?)';
  const connect = await connectDB();
  const [result] = await connect.query(insertAutor, [
    body.autor,
    body.job,
    body.photo,
  ]);

  const idAutor = result.insertId;

  let insertProject =
    'INSERT INTO projects (name, slogan, repo, demo, technologies, desc, image, fk_autor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const [resltProject] = await connect.query(insertProject, [
    body.name,
    body.slogan,
    body.repo,
    body.demo,
    body.technologies,
    body.desc,
    body.image,
    body.fk_autor,
  ]);

  console.log(result);
  res.json({});
  connect.end();
});

//http://localhost:4000/project/${resultProject.insertId}

server.get("/project/:idProject", async (req, res) =>{
const id = req.params.idProject;
const query = "SELECT * FROM autor INNER JOIN projects ON fk_autor = id WHERE id = ?";
  const connect = await connectDB();
  const [results] = await connect.query(query, id);
  res.render('detalProject', results[0]);
});

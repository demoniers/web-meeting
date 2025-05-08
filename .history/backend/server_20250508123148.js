const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const News = require("./models/News");
const Inscripcion = require("./models/Inscripcion");
const Galeria = require("./models/Galeria");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando");
});
app.get("/news", async (req, res) => {
  const news = await News.findAll();
  res.json(news);
});
app.post("/news", async (req, res) => {
  const newArticle = await News.create(req.body);
  res.json({ message: "📰 Noticia guardada", article: newArticle });
});

app.get("/inscripciones", async (req, res) => {
  const inscripciones = await Inscripcion.findAll();
  res.json(inscripciones);
});
app.post("/inscripciones", async (req, res) => {
  try {
    const nuevaInscripcion = await Inscripcion.create(req.body);
    res.json({ message: "✅ Inscripción realizada con éxito", inscripcion: nuevaInscripcion });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar inscripción" });
  }
});


// SUBIER ARCHIVOS USANDO MULTER

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// FIN DE MULTER

// Obtener archivos de la galería
app.get("/galeria", async (req, res) => {
  const archivos = await Galeria.findAll();
  res.json(archivos);
});

// Subir archivos a la galería
app.post("/galeria", upload.single("file"), async (req, res) => {
  const nuevoArchivo = await Galeria.create({
    titulo: req.body.titulo,
    archivo: `/uploads/${req.file.filename}`,
    tipo: req.body.tipo,
  });
  res.json({ message: "✅ Archivo subido", archivo: nuevoArchivo });
});

// Registro de nuevos usuarios
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  res.json({ message: "✅ Usuario registrado" });
});

// Login de usuarios
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "❌ Credenciales incorrectas" });
  }

  const token = jwt.sign({ username }, "SECRET_KEY", { expiresIn: "1h" });
  res.json({ token });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

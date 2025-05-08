const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const News = require("./models/News");


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

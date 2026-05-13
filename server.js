const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Lista principal
const lista = [
  { id: 1, nome: "Item 1" },
  { id: 2, nome: "Item 2" },
  { id: 3, nome: "Item 3" }
];

// Lista de códigos (exemplo fake)
const codigos = [
  { id: 101, codigo: "ABC-123-XYZ" },
  { id: 102, codigo: "MISTICO-999" },
  { id: 103, codigo: "NODE-API-2026" }
];

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando 🚀",
    rotas: ["/lista", "/codigos", "/url-text?link=suaurl"]
  });
});

// Retorna lista
app.get("/lista", (req, res) => {
  res.json({
    sucesso: true,
    dados: lista
  });
});

// Retorna códigos
app.get("/codigos", (req, res) => {
  res.json({
    sucesso: true,
    dados: codigos
  });
});

// Converte URL em texto
app.get("/url-text", (req, res) => {
  const link = req.query.link;

  if (!link) {
    return res.status(400).json({
      erro: "Envie uma URL usando ?link="
    });
  }

  res.json({
    texto: `Você enviou a URL: ${link}`
  });
});

// Tratamento 404
app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

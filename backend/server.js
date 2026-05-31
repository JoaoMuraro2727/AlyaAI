const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Alia backend rodando 🚀");
});

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    let response = "Estou aqui pra te ouvir. Quer me contar mais?";

    if (userMessage.toLowerCase().includes("triste")) {
        response = "Sinto muito que você esteja se sentindo assim. Você não está sozinho.";
    }

    if (userMessage.toLowerCase().includes("sozinho")) {
        response = "Eu entendo essa sensação. Quer conversar um pouco?";
    }

    res.json({ reply: response });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

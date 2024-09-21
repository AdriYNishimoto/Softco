const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");
const xlsx = require("xlsx");

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

// Carregar perguntas e respostas do arquivo XLSX
const workbook = xlsx.readFile('./database/database.xlsx');
const sheetName = workbook.SheetNames[0]; // Primeiro sheet
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Criar um mapa de perguntas e respostas
const faq = {};
data.forEach(item => {
    faq[item.Pergunta.toLowerCase()] = item.Resposta;
});

wss.on("connection", (ws) => {
    ws.on("error", console.error);

    ws.on("message", (data) => {
        const message = data.toString().toLowerCase();

        // Verifica se a pergunta está no FAQ
        if (faq[message]) {
            // Responde com a resposta correspondente
            ws.send(faq[message]);
        } else {
            // Resposta padrão se a pergunta não estiver no FAQ
            ws.send("Desculpe, não tenho uma resposta para isso.");
        }
    });

    ws.on("close", () => {
        console.log("Cliente desconectado");
    });

    console.log("Cliente conectado");
});

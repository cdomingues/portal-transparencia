const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();

app.get("/proxy1", async (req: { query: { url: any; }; }, res: { send: (arg0: string) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  try {
    const { url } = req.query;
    console.log("URL recebida:", url);

    const response = await axios.get(url, { responseType: "arraybuffer" });
    console.log("Arquivo recebido");

    const filename = `${Date.now()}.tmp`;
    const filePath = path.join(__dirname, "data", filename);
    fs.writeFileSync(filePath, response.data);
    console.log("Arquivo salvo temporariamente");

    // Envie uma resposta de confirmação para o frontend
    res.send("Arquivo salvo temporariamente com sucesso");
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).send("Erro ao processar a requisição");
  }
});

app.get("/download/:filename", (req: { params: { filename: any; }; }, res: { setHeader: (arg0: string, arg1: string) => void; }) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "data", filename);
  console.log("Download iniciado:", filename);

  // Defina os cabeçalhos para o download do arquivo
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", `attachment; filename=${filename}`);

  // Crie um fluxo de leitura do arquivo e envie-o como resposta para o frontend
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

app.listen(3000, () => {
  console.log("API do Proxy1 está rodando na porta 3000");
});

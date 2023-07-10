import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const Proxy = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  try {
    const response = await axios.get(String(url));
    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching data :", error);
    return res.status(500).send("Error fetching data licitacao");
  }
};

export default Proxy;


// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";
// import fs from "fs";
// import path from "path";

// const Proxy = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { url } = req.query;

//   try {
//     const response = await axios.get(String(url), { responseType: "arraybuffer" });

//     // Salvar o arquivo temporariamente na pasta "data"
//     const filename = `${Date.now()}.tmp`;
//     const filePath = path.join(process.cwd(), "data", filename);
//     fs.writeFileSync(filePath, response.data);

//     // Enviar o arquivo como resposta para o front-end
//     res.setHeader("Content-Type", response.headers["content-type"]);
//     res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
//     fs.createReadStream(filePath).pipe(res);
//     fs.unlinkSync(filePath); // Remover o arquivo temporário após o envio

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return res.status(500).send("Error fetching data licitacao");
//   }
// };

// export default Proxy;

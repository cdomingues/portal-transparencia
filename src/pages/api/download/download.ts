// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// const DownloadAPI = (req: NextApiRequest, res: NextApiResponse) => {
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62593';
//   const filePath = path.join(process.cwd(), 'Base64', `${url.slice(-5)}.txt`);

//   if (fs.existsSync(filePath)) {
//     res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
//     res.setHeader('Content-type', 'application/pdf');

//     console.log('File exists:', filePath); // Adiciona um log para verificar se o arquivo existe

//     const filestream = fs.createReadStream(filePath);
//     filestream.pipe(res);
//   } else {
//     console.log('File not found:', filePath); // Adiciona um log para indicar que o arquivo não foi encontrado
//     res.status(404).send('File not found');
//   }
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';
// import axios from 'axios';

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62593';
//   const folderPath = path.join(process.cwd(), 'Base64');
//   const fileName = `${url.slice(-5)}${path.extname(url)}`; // Obtém a extensão do arquivo original
//   const filePath = path.join(folderPath, fileName);

//   if (fs.existsSync(filePath)) {
//     res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
//     res.setHeader('Content-type', 'application/pdf');

//     console.log('File exists:', filePath); // Adiciona um log para verificar se o arquivo existe

//     const filestream = fs.createReadStream(filePath);
//     filestream.pipe(res);
//   } else {
//     console.log('File not found:', filePath); // Adiciona um log para indicar que o arquivo não foi encontrado

//     try {
//       const response = await axios.get(url, { responseType: 'arraybuffer' });

//       fs.mkdirSync(folderPath, { recursive: true });

//       fs.writeFileSync(filePath, response.data);

//       console.log('File saved:', filePath); // Adiciona um log para indicar que o arquivo foi salvo

//       res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
//       res.setHeader('Content-type', 'application/pdf');

//       const filestream = fs.createReadStream(filePath);
//       filestream.pipe(res);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Error downloading file');
//     }
//   }
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';

// dotenv.config();

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62598';

//   // Extract extension from the url
//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat'; // default extension if none found
//   }

//   const fileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'Base64');
//   const filePath = path.join(basePath, fileName);

//   // Check if the file already exists
//   if (!fs.existsSync(filePath)) {
//     try {
//       const response = await axios.get(url, { responseType: 'arraybuffer' });
//       fs.writeFileSync(filePath, response.data);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Error downloading file');
//       return;
//     }
//   }

//   const mimeType = mime.lookup(filePath) || 'application/octet-stream';

//   res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
//   res.setHeader('Content-type', mimeType);
//   const filestream = fs.createReadStream(filePath);
//   filestream.pipe(res);
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';

// dotenv.config();

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62598';

//   // Extract extension from the url
//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat'; // default extension if none found
//   }

//   const fileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'public', 'Base64');
//   const filePath = path.join(basePath, fileName);

//   // Check if the file already exists
//   if (!fs.existsSync(filePath)) {
//     try {
//       const response = await axios.get(url, { responseType: 'arraybuffer' });
//       fs.writeFileSync(filePath, response.data);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Error downloading file');
//       return;
//     }
//   }

//   const mimeType = mime.lookup(filePath) || 'application/octet-stream';

//   res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
//   res.setHeader('Content-type', mimeType);
//   const filestream = fs.createReadStream(filePath);
//   filestream.pipe(res);
// };

// export default DownloadAPI;

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import mime from 'mime-types';

dotenv.config();

const ftpConfig = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: parseInt(process.env.FTP_PORT || '21'),
};

const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62598';

  // Extract extension from the url
  let extension = path.extname(url);
  if (!extension) {
    extension = '.dat'; // default extension if none found
  }

  const fileName = `${url.slice(-5)}${extension}`;
  const basePath = path.join(process.cwd(), 'public', 'Base64');
  const filePath = path.join(basePath, fileName);

  // Check if the file already exists
  if (!fs.existsSync(filePath)) {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      try {
        fs.writeFileSync(filePath, response.data);
        console.log('Arquivo baixado com sucesso!');
        
      } catch (error) {
        console.error('Error writing file:', error);
        res.status(500).send('Error writing file');
        return;
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      res.status(500).send('Error downloading file');
      return;
    }
  }

  const mimeType = mime.lookup(filePath) || 'application/octet-stream';

  res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
  res.setHeader('Content-type', mimeType);
  const filestream = fs.createReadStream(filePath);
  filestream.pipe(res);
};

export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';
// import React, { useState } from 'react';

// dotenv.config();

// console.log("Iniciando API...");

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const [inputValue, setInputValue] = useState('');
//   const { fileName } = req.query;
//   const url = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${fileName}`;

//   // Extract extension from the url
//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat'; // default extension if none found
//   }

//   console.log(`A extensão do arquivo é: ${extension}`);

//   const fileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'public', 'Base64');
//   const filePath = path.join(basePath, fileName);

//   console.log(`Caminho do arquivo: ${filePath}`);

//   // Check if the file already exists
//   if (!fs.existsSync(filePath)) {
//     console.log('Arquivo não existe. Tentando baixar...');
//     try {
//       const response = await axios.get(url, { responseType: 'arraybuffer' });
//       console.log('Resposta recebida. Tentando gravar no arquivo...');
//       try {
//         fs.writeFileSync(filePath, response.data);
//         console.log('Arquivo baixado com sucesso!');
//       } catch (error) {
//         console.error('Error writing file:', error);
//         res.status(500).send('Error writing file');
//         return;
//       }
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Error downloading file');
//       return;
//     }
//   } else {
//     console.log('Arquivo já existe.');
//   }

//   const mimeType = mime.lookup(filePath) || 'application/octet-stream';
//   console.log(`MimeType do arquivo: ${mimeType}`);

//   res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
//   res.setHeader('Content-type', mimeType);
//   const filestream = fs.createReadStream(filePath);
//   filestream.pipe(res);
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';
// import React, { useState } from 'react';

// dotenv.config();

// console.log("Iniciando API...");

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const [inputValue, setInputValue] = useState('');
//   const { fileName } = req.query;
//   const url = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${fileName}`;

//   // Extract extension from the url
//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat'; // default extension if none found
//   }

//   console.log(`A extensão do arquivo é: ${extension}`);

//   const finalFileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'public', 'Base64');
//   const filePath = path.join(basePath, finalFileName);

//   console.log(`Caminho do arquivo: ${filePath}`);

//   // Restante do código...
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';
// import React, { useState } from 'react';

// dotenv.config();

// console.log("Iniciando API...");

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { fileName } = req.query;
//   const url = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${fileName}`;

//   // Extract extension from the url
//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat'; // default extension if none found
//   }

//   console.log(`A extensão do arquivo é: ${extension}`);

//   const finalFileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'public', 'Base64');
//   const filePath = path.join(basePath, finalFileName);

//   console.log(`Caminho do arquivo: ${filePath}`);

//   // Restante do código...
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// import mime from 'mime-types';

// dotenv.config();

// console.log("Iniciando API...");

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || '21'),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { fileName } = req.query;
//   const url = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${fileName}`;

//   let extension = path.extname(url);
//   if (!extension) {
//     extension = '.dat';
//   }

//   console.log(`A extensão do arquivo é: ${extension}`);

//   const fileName = `${url.slice(-5)}${extension}`;
//   const basePath = path.join(process.cwd(), 'public', 'Base64');
//   const filePath = path.join(basePath, fileName);

//   console.log(`Caminho do arquivo: ${filePath}`);

//   if (!fs.existsSync(filePath)) {
//     console.log('Arquivo não existe. Tentando baixar...');
//     try {
//       const response = await axios.get(url, { responseType: 'arraybuffer' });
//       console.log('Resposta recebida. Tentando gravar no arquivo...');
//       try {
//         fs.writeFileSync(filePath, response.data);
//         console.log('Arquivo baixado com sucesso!');
//       } catch (error) {
//         console.error('Error writing file:', error);
//         res.status(500).send('Error writing file');
//         return;
//       }
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       res.status(500).send('Error downloading file');
//       return;
//     }
//   } else {
//     console.log('Arquivo já existe.');
//   }

//   const mimeType = mime.lookup(filePath) || 'application/octet-stream';
//   console.log(`MimeType do arquivo: ${mimeType}`);

//   res.setHeader('Content-disposition', 'attachment; filename=' + path.basename(filePath));
//   res.setHeader('Content-type', mimeType);
//   const filestream = fs.createReadStream(filePath);
//   filestream.pipe(res);
// };

// export default DownloadAPI;

// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";
// import fs from "fs";
// import dotenv from "dotenv";

// dotenv.config();

// const ftpConfig = {
//   user: process.env.FTP_USER,
//   password: process.env.FTP_PASS,
//   host: process.env.FTP_HOST,
//   port: parseInt(process.env.FTP_PORT || "21"),
// };

// const DownloadAPI = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const fileNameParam = req.query.fileName;
//     if (typeof fileNameParam !== "string") {
//       res.status(400).send("Invalid file name");
//       return;
//     }

//     const url = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${fileNameParam}`;

//     const response = await axios.get(url, { responseType: "arraybuffer" });

//     const base64 = Buffer.from(response.data).toString("base64");

//     return res.status(200).json({
//       base64,
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// export default DownloadAPI;

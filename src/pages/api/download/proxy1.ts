// import { NextApiRequest, NextApiResponse } from "next";
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import url from 'url';

// export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { link } = req.body;

//         try {
//             // Use Axios para fazer uma requisição GET ao link de download
//             const response = await axios.get(link, { responseType: 'stream' });

//             // Analise o link para obter o nome do arquivo e a extensão
//             const parsedUrl = url.parse(link, true);
//             const fileName = parsedUrl.query.arquivo as string;

//             // Crie um stream de escrita para o arquivo de destino
//             const downloadPath = path.resolve('./data', fileName);
//             const writer = fs.createWriteStream(downloadPath);

//             // Pipe o stream de leitura da resposta no stream de escrita do arquivo
//             response.data.pipe(writer);

//             writer.on('finish', () => {
//                 res.json({ status: 'Download Completed' });
//             });

//             writer.on('error', (err) => {
//                 console.error(err);
//                 res.status(500).json({ status: 'Download Failed' });
//             });
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ status: 'Download Failed' });
//         }
//     } else {
//         res.setHeader('Allow', 'POST');
//         res.status(405).end('Method Not Allowed');
//     }
// }

// import { NextApiRequest, NextApiResponse } from "next";
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import url from 'url';

// export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { link } = req.body;

//         try {
//             // Use Axios to make a GET request to the download link
//             const response = await axios.get(link, { responseType: 'stream' });

//             // Parse the link to get the file name and extension
//             const parsedUrl = url.parse(link, true);
//             const fileName = parsedUrl.query.arquivo as string;

//             // Create a write stream for the destination file
//             const downloadPath = path.resolve('./public/data', fileName);
//             const writer = fs.createWriteStream(downloadPath);

//             // Pipe the read stream from the response into the write stream of the file
//             response.data.pipe(writer);

//             writer.on('finish', () => {
//                 res.json({ status: 'Download Completed', downloadLink: `/data/${fileName}` });
//             });

//             writer.on('error', (err) => {
//                 console.error(err);
//                 res.status(500).json({ status: 'Download Failed' });
//             });
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ status: 'Download Failed' });
//         }
//     } else {
//         res.setHeader('Allow', 'POST');
//         res.status(405).end('Method Not Allowed');
//     }
// }


import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import url from 'url';

export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { link } = req.body;

        try {
            // Use Axios to make a GET request to the download link
            const response = await axios.get(link, { responseType: 'stream' });

            // Parse the link to get the file name and extension
            const parsedUrl = url.parse(link, true);
            let fileName = parsedUrl.query.arquivo as string;

            // Add PDF extension to file name
            fileName = fileName + '.pdf';

            // Create a write stream for the destination file
            const downloadPath = path.resolve('./public/data', fileName);
            const writer = fs.createWriteStream(downloadPath);

            // Pipe the read stream from the response into the write stream of the file
            response.data.pipe(writer);

            writer.on('finish', () => {
                res.json({ status: 'Download Completed', downloadLink: `/data/${fileName}` });
            });

            writer.on('error', (err) => {
                console.error(err);
                res.status(500).json({ status: 'Download Failed' });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Download Failed' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

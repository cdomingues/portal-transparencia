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
//             let fileName = parsedUrl.query.arquivo as string;

//             // Add PDF extension to file name
//             fileName = fileName + '.pdf';

//             // Create a write stream for the destination file
//             const downloadPath = path.resolve('./data', fileName);
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

//             // Analyze the link to get the file name
//             const parsedUrl = url.parse(link, true);
//             const fileName = parsedUrl.query.arquivo as string;

//             // Create a write stream for the target file
//             const downloadPath = path.resolve('./data', fileName);
//             const writer = fs.createWriteStream(downloadPath);

//             // Pipe the read stream of the response into the write stream of the file
//             response.data.pipe(writer);

//             writer.on('finish', () => {
//                 // Compose the download URL
//                 const downloadUrl = `https://www.dadosabertos.mogidascruzes.sp.gov.br/data/${fileName}`;
//                 // Return the status and the download URL
//                 res.json({ status: 'Download Completed', fileName, downloadUrl });
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
//             // Use Axios para fazer uma requisição GET ao link de download
//             const response = await axios.get(link, { responseType: 'stream' });

//             // Analyze the link to get the file name
//             const parsedUrl = url.parse(link, true);
//             const fileName = parsedUrl.query.arquivo as string;

//             // Create a write stream for the target file
//             const downloadPath = path.resolve('./data/filesLaw', fileName);
//             const writer = fs.createWriteStream(downloadPath);

//             // Pipe the read stream of the response into the write stream of the file
//             response.data.pipe(writer);

//             writer.on('finish', () => {
//                 // Compose the download URL
//                 const downloadUrl = `https://www.dadosabertos.mogidascruzes.sp.gov.br/data/${fileName}`;
//                 // Return the status and the download URL
//                 res.json({ status: 'Download Completed', fileName, downloadUrl });
//             });
// console.log( fileName)

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
        console.log('Received POST request');

        try {
            // Analyze the link to get the file name
            const parsedUrl = url.parse(link, true);
            const fileName = parsedUrl.query.arquivo as string;
            console.log('Parsed URL:', parsedUrl);
            console.log('File name:', fileName);

            // Compose the download URL
            const downloadUrl = `https://dadosabertos.mogidascruzes.sp.gov.br/api/download/downloadProxy2?filename=${fileName}`;
            console.log('Composed download URL:', downloadUrl);

            try {
                // Try to access the file directly
                console.log('Attempting to access file directly');
                const response = await axios.head(downloadUrl);
                console.log('HEAD request response status:', response.status);

                // If the status code is 200, the file exists, so return the download URL
                if (response.status === 200) {
                    console.log('File exists, returning download URL');
                    res.json({ status: 'Download Completed', fileName, downloadUrl });
                    return;
                }
            } catch (error) {
             // If the file does not exist (status code 404), or there is another error, continue with the download process
console.log('Error during HEAD request:', (error as Error).message);

            }

            console.log('Proceeding with download process');
            // Use Axios to make a GET request to the download link
            const response = await axios.get(link, { responseType: 'stream' });
            console.log('GET request response status:', response.status);

            // Create a write stream for the target file
            const downloadPath = path.resolve('./data/filesLaw', fileName);
            const writer = fs.createWriteStream(downloadPath);
            console.log('Created write stream');

            // Pipe the read stream of the response into the write stream of the file
            response.data.pipe(writer);
            console.log('Piping data to write stream');

            writer.on('finish', () => {
                console.log('Write stream finished');
                res.json({ status: 'Download Completed', fileName, downloadUrl });
            });

            writer.on('error', (err) => {
                console.error('Error during writing:', err);
                res.status(500).json({ status: 'Download Failed' });
            });
        } catch (err) {
            console.error('Error during download process:', err);
            res.status(500).json({ status: 'Download Failed' });
        }
    } else {
        console.log('Received non-POST request');
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

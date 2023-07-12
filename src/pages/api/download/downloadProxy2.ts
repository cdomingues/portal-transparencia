// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     const { filename } = req.query;

//     const filePath = path.join(process.cwd(), 'data', filename as string);

//     try {
//       if (fs.existsSync(filePath)) {
//         const file = fs.readFileSync(filePath);
//         const fileBase64 = Buffer.from(file).toString('base64');

//         res.status(200).json({ fileBase64 });
//       } else {
//         res.status(404).json({ error: 'File not found.' });
//       }
//     } catch (err) {
//       res.status(500).json({ error: 'Error reading file.' });
//     }
//   } else {
//     res.setHeader('Allow', 'GET');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     const { filename } = req.query;

//     const filePath = path.join(process.cwd(), 'data', filename as string);

//     try {
//       if (fs.existsSync(filePath)) {
//         const file = fs.readFileSync(filePath);

//         res.setHeader('Content-Type', 'application/pdf');
//         res.setHeader(
//           'Content-Disposition',
//           'inline; filename=' + (filename as string)
//         );
//         res.status(200).send(file);
//       } else {
//         res.status(404).json({ error: 'File not found.' });
//       }
//     } catch (err) {
//       res.status(500).json({ error: 'Error reading file.' });
//     }
//   } else {
//     res.setHeader('Allow', 'GET');
//     res.status(405).end('Method Not Allowed');
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function downloadProxy2(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET' || req.method === 'HEAD') {
    const { filename } = req.query;

    const filePath = path.join(process.cwd(), 'data/filesLaw', filename as string);

    try {
      if (fs.existsSync(filePath)) {
        const file = fs.readFileSync(filePath);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
          'Content-Disposition',
          'inline; filename=' + (filename as string)
        );

        // Only send the file if it's a GET request
        if (req.method === 'GET') {
          res.status(200).send(file);
        } else {
          res.status(200).end();
        }
      } else {
        res.status(404).json({ error: 'File not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error reading file.' });
    }
  } else {
    res.setHeader('Allow', 'GET, HEAD');
    res.status(405).end('Method Not Allowed');
  }
}

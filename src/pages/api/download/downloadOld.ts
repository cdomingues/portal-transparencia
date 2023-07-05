import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const DownloadOld = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=2020&tipo=5&pagina=1&tamanho=100000';

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
};

export default DownloadOld;

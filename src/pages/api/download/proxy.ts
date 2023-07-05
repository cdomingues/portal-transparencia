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

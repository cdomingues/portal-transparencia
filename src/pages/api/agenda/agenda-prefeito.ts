import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("bateu aqui");

  if (req.method !== "GET") {
    return res.status(404);
  }
  
  const { data } = await axios.get(
    "http://192.168.1.118/api/3/action/datastore_search?resource_id=abf2e6db-bd7d-49de-a504-483eb95cb744"
  );

  if (!data) {
    return res.status(200).json({
      data: null,
    });
  }

  return res.status(200).json({
    data,
  });
}

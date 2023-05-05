import axios from "axios";
import { baseUrl } from "../../config";

export const getScheduleMayor = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/agenda/agenda-prefeito`);

    return { data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    
    return { data: null };
  }
};

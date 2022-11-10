import axios, { AxiosError, Method } from "axios";

const transparencyRequester = async ({
  method,
  path,
  headers = {},
  params = {},
}: {
  method: Method;
  path: string;
  headers?: {};
  params?: {};
}) => {
  try {
    const response = await axios.request({
      method,
      baseURL: "http://www.licitacao.pmmc.com.br/Transparencia",
      url: path,
      headers: {
        ...headers,
        Accept: "*/*",
        "Content-Type": "text/html;charset=UTF-8",
      },
      params,
    });
    return { data: response.data, error: null };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return { data: null, error: error.response?.data };
    }
    return { data: null, error: error?.message };
  }
};

export default transparencyRequester;

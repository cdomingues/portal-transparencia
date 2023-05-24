import axios, { AxiosResponse } from "axios";

const BASE_URI: string =
  process.env.BASE_URI ||
  "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=abf2e6db-bd7d-49de-a504-483eb95cb744";

const defaultMessage: string =
  "Serviço indisponível, verifique sua conexão com a internet, ou tente novamente mais tarde!";

interface ErrorResponse {
  error: any;
  status: any;
  message: string;
}

interface Response {
  error: any;
  data: any;
}

const sendResponse = ({ status, message, data }: any) => {
  return { error: null, data };
};

const request = async ({
  method,
  path,
  body,
  headers,
  baseURL,
  params,
}: any): Promise<Response> => {
  try {
    const apiURL: string = baseURL || BASE_URI;

    const { status, statusText, data }: AxiosResponse = await axios.request({
      baseURL: apiURL,
      headers: {
        ...headers,
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
      },
      method,
      url: path,
      data: body,
      params,
    });

    return sendResponse({
      status,
      message: data?.message || statusText,
      data: data.data ? data.data : data,
    });
  } catch (error: any) {
    return sendResponse({
      status: error?.response?.status,
      message:
        error.error ||
        error.response?.data?.error ||
        error.message ||
        defaultMessage,
    });
  }
};

export default request;

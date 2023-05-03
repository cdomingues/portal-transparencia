import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import fileCSV from "../assets/file";
import axios from "axios";

type FileCSVContextProps = {
  children: ReactNode;
};

export const defaultValueContext = {};

const FileCSVContext = createContext<any>(defaultValueContext);

export function FileCSVWrapper({ children }: FileCSVContextProps) {
  const [file, setFile] = useState<any>();
  const apiToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwR3I1S1FoaFI0UVVoenVvWE1fUjhuZXd0WHNvMzhaZ2tnV2NFNTNnOE9zIiwiaWF0IjoxNjgzMDU5NDE1fQ.b38D5ovN6VWz_nRvq0V9DR08WXjqm8i6LHbmwptb8Ns";
  const getFileOfConstructions = async () => {
    const { data } = await axios.get(
      `https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=c23921f1-9d90-44b1-b710-02233f9d47c5`
    );

    if (!data) {
      return;
    }
    return setFile(data);
  };

  useEffect(() => {
    getFileOfConstructions();
  }, []);

  return (
    <FileCSVContext.Provider value={file}>
      {file ? (
        children
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      )}
    </FileCSVContext.Provider>
  );
}

export const useFileCSVContext = () => useContext(FileCSVContext);

export default FileCSVWrapper;

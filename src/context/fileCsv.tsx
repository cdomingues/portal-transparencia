import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import fileCSV from "../assets/file";

type FileCSVContextProps = {
  children: ReactNode;
};

export const defaultValueContext = {};

const FileCSVContext = createContext<any>(defaultValueContext);

export function FileCSVWrapper({ children }: FileCSVContextProps) {
  const [file, setFile] = useState<any>();

  useEffect(() => {
    setFile(fileCSV);
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

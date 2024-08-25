import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { DataType } from "../components/Data.types";

type DataContextProvider = {
  children: ReactNode;
};


type DataContextType = {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

const DataContextProvider = ({ children }: DataContextProvider) => {
  const [data, setData] = useState<DataType>({} as DataType);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <DataContext.Provider
      value={{ data, setData, loading, setLoading, error, setError }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };

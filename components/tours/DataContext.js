import { createContext } from "react";
import { footerImages } from "./data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const more = footerImages;
  return <DataContext.Provider value={more}>{children}</DataContext.Provider>;
};

export default DataContext;

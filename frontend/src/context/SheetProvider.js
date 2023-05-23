import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../config";

const SheetContext = createContext();

const SheetProvider = ({children, currentSheet}) => {

    const [selTool, setSelTool] = useState(null);

    return <SheetContext.Provider value={{selTool, setSelTool}}>
        {children}
    </SheetContext.Provider>
}

export const useSheetContext = () => useContext(SheetContext);

export default SheetProvider;

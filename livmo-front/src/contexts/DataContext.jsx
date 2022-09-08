import {createContext} from "react";
const DataContext = createContext();
function DataContextProvider ({children}){
    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}

export  DataContextProvider ;
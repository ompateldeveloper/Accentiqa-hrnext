import { createContext, useContext, useState } from "react"

const GlobalContext = createContext(); 
export default function GlobalContextProvider({children}) {
    const [tabs, setTabs] = useState('Home')
    const [sidebar,setSidebar] = useState(false);


    const values = {
        tabs,
        setTabs,
        sidebar,
        setSidebar
    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}
export function useGlobalContext(){
    const context = useContext(GlobalContext);
    return context
}

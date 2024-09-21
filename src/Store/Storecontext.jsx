import { createContext, useState } from "react";


export const StoreContext = createContext(null)



export const StoreProvider = (props)=>{
    const [values,setvalues] = useState("")    
    const [addtocart,setaddtocart] = useState([])
    return(
    <StoreContext.Provider value={{values,setvalues,addtocart,setaddtocart}}>
        {props.children}
    </StoreContext.Provider>
    )
}

import { createContext } from "react";


//1st Step 
const BioContext = createContext();

//2nd Step
const BioProvider = ({children})=>{
  
    const myName = "Bheem";
    const myAge = 20;

    return(
        <BioContext.Provider value={{myName, myAge}}>
         {children}
        </BioContext.Provider>
    )
}

export {BioProvider,BioContext};

import { useState } from "react";
import { createContext } from "react";
import run from "../config/gemini";
export const Context = createContext();
const ContextProvider = (props) =>{

    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPrompt] = useState("")
    const [previousPrompts,setPreviousPrompts] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const delayPara = (index,next)=> {
        setTimeout(function(){
            setResultData(prev => prev + next)
        },75*index)
    }
    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
       const response =  await run(input)
       let responseArray = response.split("**");
       let newResponse;
       for(let i = 0; i < responseArray.length; i++){
            if(i == 0 || i%2 == 0){
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
       }
       let addNextLineResult = newResponse.split("*").join("</br>");
       let newResponseArray = addNextLineResult.split(" ");
       for(let i = 0; i < newResponseArray.length; i++){
        delayPara(i,newResponseArray[i] + " ");
       }
       setLoading(false)
       setInput("")

    }
    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        resultData,
        input,
        setInput,
        showResult
    }
    return (<Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>)
}

export default ContextProvider
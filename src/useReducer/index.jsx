import { useReducer } from "react";


const ExampleUseReducer = ()=>{

const reducer = (state, action)=>{
    if(action.type === 'INCREMENT'){
        return state + 1;
    }
    if(action.type === 'DECREMENT'){
        return state - 1;
    }
}

const [value, dispatch] = useReducer(reducer, 0);

    return(
        <>
         <div className="container bg-amber-100 flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-4xl">Example of useReducer Hook in React 19</h1>
            <h2 className="mt-2 text-2xl">Value : {value} </h2>
            <button onClick={()=> dispatch({type: "INCREMENT"})} className="mt-4 w-auto h-auto p-2 border cursor-pointer hover:bg-gray-200">Increment</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})} className="mt-4 w-auto h-auto p-2 border cursor-pointer hover:bg-gray-200">Decrement</button>
         </div>
        </>
    )
}

export default ExampleUseReducer;
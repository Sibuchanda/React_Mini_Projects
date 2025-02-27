import { useReducer } from "react";


const ExampleUseReducer = ()=>{

const initialstate = {
    count : 0,
    incre: 3,
    decre: 3,
}

const reducer = (state, action)=>{
    // if(action.type === 'INCREMENT'){
    //     return state + 1;
    // }
    // if(action.type === 'DECREMENT'){
    //     return state - 1;
    // }
    // if(action.type === 'RESET'){
    //     return state = 0;
    // }

    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                count : state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count : state.count - 1
            }
        case "RESET":
            return {
                ...state,
                count : 0
            }
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(reducer, initialstate);

    return(
        <>
         <div className="container bg-amber-100 flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-4xl">Example of useReducer Hook in React 19</h1>
            <h2 className="mt-2 text-2xl">Value : {state.count} </h2>
            <button onClick={()=> dispatch({type: "INCREMENT"})} className="mt-4 w-auto h-auto p-2 border cursor-pointer hover:bg-gray-200">Increment</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})} className="mt-4 w-auto h-auto p-2 border cursor-pointer hover:bg-gray-200">Decrement</button>
            <button onClick={()=> dispatch({type: "RESET"})} className="mt-4 w-auto h-auto p-2 border cursor-pointer hover:bg-gray-200">RESET</button>
         </div>
        </>
    )
}

export default ExampleUseReducer;
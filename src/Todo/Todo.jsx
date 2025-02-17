import { useEffect, useState } from 'react';
import './Todo.css';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Todo = () => {

    const [inputValue, setInputValue] = useState(""); // Storing the input values form the <input> tag. But one value at a time
    const [task, setTask] = useState([]); // Storing all the tasks entered through the input tag
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault(); // As by default <form> reload the page
        if (!inputValue) return; // If there is no value in 'inputValue' then simply return. 
        if (task.includes(inputValue)) {
            setInputValue("");
            return; // If the task array contains any duplicate value then do not add it into the task array

        }
        setTask((preTask) => [...preTask, inputValue]); // Here we add the previous task and then new task
        setInputValue("");
     
    }


   useEffect(()=>{
    const interval = setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDateTime(`${formatedDate} - ${formatedTime}`);
    },1000);

    return ()=> clearInterval(interval);
   }, [])



    return (
        <>
            <div className='container w-screen h-screen bg-amber-100 flex flex-col items-center'>
                <section className='todoHeading mt-4'>
                    <header>
                        <h1 className='text-3xl font-bold text-blue-700'>Todo List</h1>
                        {/* Date and Time */}
                    </header>
                </section>
                {/* Live date and Time  */}
                <h2 className='text-xl font-bold'> {dateTime} </h2>
                {/* Form section  */}
                <section className="todoForm mt-6">
                    <form className="flex" onSubmit={handleFormSubmit}>
                        <div className="flex w-80 h-12 items-center bg-white rounded-l-lg shadow-sm border border-gray-300">
                            <input
                                type="text"
                                className="todoInput border-none outline-none flex-grow text-gray-700 text-sm ml-4"
                                autoComplete="off"
                                placeholder="Enter a task..." value={inputValue} onChange={(event) => handleInputChange(event.target.value)}
                            />
                            <button
                                type="submit"
                                className="todoBtn w-24 h-12 cursor-pointer bg-blue-600 text-white text-sm font-medium rounded-sm transition-all duration-300 hover:bg-green-400"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </section>

                {/* Task list section */}
                <section className='taskList mt-6'>
                    <ul className='w-80'>
                        {task.map((currTask, index) => {
                            return (
                                <li key={index} className='h-10 flex items-center bg-white rounded-lg my-2 px-3 justify-between'>
                                    <span className='text-xl font-bold truncate w-[70%] overflow-hidden text-ellipsis whitespace-nowrap'>{currTask}</span>
                                    <div className='flex space-x-2'>
                                        <button className='text-2xl text-gray-500 hover:text-green-700 transition-colors duration-300 cursor-pointer'><MdCheckBoxOutlineBlank /></button>
                                        <button className='text-2xl text-red-400 hover:text-red-600 cursor-pointer'><MdDelete /></button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>


            </div>
        </>
    )

}

export default Todo;
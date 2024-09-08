import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { addTodo } from '../Slice/todo/todoSlice'
import "/src/components/style.css"


const AddTodo = () => {
    const [input, setInput]= useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(addTodo(input));
       setInput("");
    }

  return (
    <>
    <div className="container">
    <form className='test' onSubmit={handleSubmit}>
       <input 
         type="text"
         placeholder='New '
         value={input}
         onChange={(e)=>{setInput(e.target.value)}}
        />
     <button className='btn__niz'>add </button>
     </form>
     </div>
    </>
  )
}

export default AddTodo;
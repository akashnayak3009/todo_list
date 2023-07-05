import React from 'react'

export default function({handleSubmit,todo,editId,setTodo}) {
  return (
    <div>
        <form className='todoForm' onSubmit={handleSubmit }>
            <input type ="text" value ={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit">{editId? "Edit" : "GO"}</button>
        </form>
    </div>
  );
};

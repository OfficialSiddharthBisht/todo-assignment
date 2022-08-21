import { nanoid } from 'nanoid';
import React from 'react'

export const SubTaskAdder = ({ subTask, setSubTask }) => {
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    const obj = {
      title: text,
      status: false,
      id: nanoid()
    }
    setSubTask(prev => (
      [...prev, obj]
    ))
  }
  const handleCheckChange = (id) =>{
    const updatedList = [...subTask].map((el)=>el.id === id ? {...el,status: !el.status} : el)
    setSubTask(updatedList);
  }

  const handleDelete = (id) =>{
    const updatedList = [...subTask].filter((el)=>el.id !== id)
    setSubTask(updatedList);
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>

      </div>
      {subTask.map(el => (
        <ul style={{display:'flex',width:'220px', justifyContent:'space-between'}} key = {el.id}>
          <input type="checkbox" checked ={el.status} onChange = {()=>handleCheckChange(el.id)}/>
          <div>{el.title}</div> 
          <button onClick={()=>handleDelete(el.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}
import { useState } from "react";
import  { FormEvent } from 'react';
import { useNavigate } from "react-router";
function AddNewBlog() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('maria')
    const [isPending,setIsPending]=useState(false)
    const navigate=useNavigate()
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        const blog={title,body,author}

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("Blog Created")
            navigate("/blogs")
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Title: <input required type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>

        <label>
          Blog Details: <textarea required  value={body} onChange={(e)=>setBody(e.target.value)}/>
        </label>

        <label>
          Blog Author:<select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="juty">juty</option>
          </select>
        </label>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}

      </form>
    </div>
  );
}
export default AddNewBlog;

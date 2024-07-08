type blogs={
    title:string,
    id:number,
    author:string,
    body:string
}

interface Props{
    blogs:blogs[]
    title:string,
    handleDelete:(id:number)=> void
}

const BlogList = ({ blogs, title, handleDelete }:Props) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            {/* <small>{blog.body}</small> */}
            <p>-- Written by { blog.author }</p>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;
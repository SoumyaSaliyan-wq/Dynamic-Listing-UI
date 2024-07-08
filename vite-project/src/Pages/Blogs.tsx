import BlogList from "../components/BlogList";
import useFetch  from "../Hooks/useFetch"
import { useNavigate } from "react-router";

const Blogs = () => {
  const {data,isPending,error}=useFetch("http://localhost:8000/blogs")
  const navigate=useNavigate()
  const handleDelete = (id: number) => {
    fetch(`http://localhost:8000/blogs/${id}`,{
      method:"DELETE",
    }).then(()=>{
      console.log("Blog Deleted")
      window.location.reload();
      navigate("/blogs")
    })
    .catch(()=>{
      console.log("Error")
    })
  };
  return (
    <div className="Home">
      {isPending && <div>Loading ...</div>}
      {data && (
        <BlogList
          blogs={data}
          title="My Blogs"
          handleDelete={handleDelete}
        ></BlogList>
      )}
    {error && <div>{error}</div>}

    </div>
  );
};

export default Blogs;

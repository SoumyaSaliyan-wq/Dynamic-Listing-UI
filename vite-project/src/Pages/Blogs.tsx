import BlogList from "../components/BlogList";
import useFetch  from "../Hooks/useFetch"
const Blogs = () => {
  const {data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs")
  
  const handleDelete = (id: number) => {
    // let newBlog = data.filter((i: { id: number }) => id != i.id);
    // setBlogs(newBlog);
    return
  };
  return (
    <div className="Home">
      {isPending && <div>Loading ...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="My Blogs"
          handleDelete={handleDelete}
        ></BlogList>
      )}
    {error && <div>{error}</div>}

    </div>
  );
};

export default Blogs;

import BlogDetails from "../components/BlogDetails";
import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";

function BlogDetailPage() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div>
      {isPending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {blog && <BlogDetails details={blog}></BlogDetails>}
    </div>
  );
}
export default BlogDetailPage;

interface BlogDetails {
  details: {
    title: string;
    body: string;
    id: number;
    author:string
  };
}
function BlogDetails({ details }: BlogDetails) {
  return (
    <div className="blog-details">
      {details && (
        <article>
          <h2>Blog Details-{details.title}</h2>
          <p>Writtern By - {details.author}</p>
          <p>{details.body}</p>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;

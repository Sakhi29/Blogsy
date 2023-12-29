import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("https://my-json-server.typicode.com/Sakhi29/blogsy-db/blogs/" + id);

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://my-json-server.typicode.com/Sakhi29/blogsy-db/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.headline}</p>
          <div>{blog.body}</div>
          <footer>Written by {blog.author}</footer>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

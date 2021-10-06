import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { Container } from "./style";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get("/list_posts")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false)
      })
      .catch(() => {
        console.log("Erro");
      });
  }, []);

  if(loading) {
    return (
      <h1>Loading</h1>
    )
  }
  return (
      <Container>
    <div className="blog">
      <div className="cards">
        {posts.map((post, key) => {
          return (
            <div className="card">
              <div className="card-body" key={key}>
                <h1>{post.title}</h1>
                <div className="line"></div>
                <h2>{post.summary}</h2>
                <div className="line"></div>
                <h3>{post.content}</h3>
                <div className="line"></div>
                <h3>Categoria: {post.category}</h3>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    </Container>
  );
}

export default Blog;
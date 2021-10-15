import { CardStyle } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import Button from "react-bootstrap/Button"
const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/list_posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch(() => {
        console.log("Erro");
      });
  }, []);

  return (
    <CardStyle>
      {posts.map((post, key) => {
        return (
          <div className="card text-center bg-light" key={key}>
            <img
              class="mx-auto d-block"
              src={post.image}
              alt="Imagem do card"
              width="440"
              height="260"
            />
            <div className="card-body text-dark">
              <h2 className="card-title">{post.title}</h2>
              <h5 className="card-text">por {post.author}</h5>
              <p className="card-text">{post.summary}</p>             
              <Link to={`/blog/${post._id}`}>
                <Button variant="outline-primary" size="xs">
                  Mais informações
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </CardStyle>
  );
};

export default Card;

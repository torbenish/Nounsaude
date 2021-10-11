import { CardStyle } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
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
              width="300"
              height="200"
            />
            <div className="card-body text-dark">
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text text-secondary">{post.summary}</p>
              <p className="card-text text-secondary">{post.content}</p>
              <a
                href=""
                className="btn btn-outline-secondary rounded-0"
                target="_blank"
              >
                Mais informações
              </a>

              <Link to={`/blog/${post._id}`}>
                <h1>{post.title}</h1>
              </Link>
              <Link to={`/blog/category`}>
                <h1>{post.title}</h1>
              </Link>
            </div>
          </div>
        );
      })}
    </CardStyle>
  );
};

export default Card;

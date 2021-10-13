import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { useParams, Link } from "react-router-dom";

const PostItem = () => {
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

useEffect(() => {
  api
  .get (`/show_post/${id}`)
  .then((response) => {
    setPostData(response.data.post);
    setLoading(false)
    console.log(response);
  })
  .catch(() => {
    console.log("Erro");
  });
}, []);

if(loading){
  return (
    <h1>Loading</h1>
  )
}
return (
  <Container>
    <div className="blog">
      <div className="cards">
        {loading && <div>...</div>}
        {postData && (
          <div className="card">
            <div className="card-body">
            <img src={postData.image} alt="BigCo Inc. logo"/>
              <h1>{postData.title}</h1>
              <div className="line"></div>
              <h2>{postData.content}</h2>
              <div className="line"></div>
              <h3>{postData.summary}</h3>
              <div className="line"></div>
              <h3>Categoria: {postData.category}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  </Container>
);
}

export default PostItem;
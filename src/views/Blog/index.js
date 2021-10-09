import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/list_posts")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch(() => {
        console.log("Erro");
      });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  // return (
  //   <>
  //     <Container>
  //   <div className="blog">
  //     <div className="cards">
  //       {posts.map((post, key) => {
  //         return (
  //           <div className="card">
  //             <div className="card-body" key={key}>
  //             <img src={companyLogo} alt="BigCo Inc. logo"/>
  //               <h1>{post.title}</h1>
  //               <div className="line"></div>
  //               <h2>{post.summary}</h2>
  //               <div className="line"></div>
  //               <h3>{post.content}</h3>
  //               <div className="line"></div>
  //               <h3>Categoria: {post.category}</h3>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>

  //   </div>
  //   </Container>
  //   <Footer />
  //   </>
  // );

  return (
    <>
      <Container>
        <div className="cardLayout">
          {posts.map((post, key) => {
            return (
              <div className="card-body" key={key}>
                <Card>
                  <CardImg
                    top
                    width="280px"
                    src={post.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{post.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {post.summary}
                    </CardSubtitle>
                    <CardText>{post.context}</CardText>
                    <Link to={`/blog/${post._id}`}>
                      <Button>Saiba mais</Button>
                    </Link>
                  </CardBody>
                </Card>
                <Link to={`/blog/${post._id}`}><h1>{post.title}</h1></Link>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Blog;

import Navbar from "../../components/Nav/Navbar";
import Card from "../../components/Card";
import { Container } from "./style";

const Blog = () => {
  
  return (
    <>
      <Navbar />
      <Container>
        <div className="container d-flex mx-auto justify-content-center align-items-center h-100 ">
          <div className="row">
            <div className="col-12">
              <div className="teste">
              <br/>
              <Card />
              <br/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;

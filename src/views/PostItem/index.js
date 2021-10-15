import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { FiArrowUp } from "react-icons/fi";

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

useEffect( () => {
  window.addEventListener('scroll', toggleVisibility);
}, []);

const scrollToTop =()=> {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
    
  const [is_visible, set_visible] = useState(false);
  
  const toggleVisibility =()=> {
    if (window.pageYOffset > 500) {
      set_visible(true);
    
    } else {
      set_visible(false);
    }
  }

if(loading){
  return (
    <h1>Loading</h1>
  )
}
return (
  <>
  <Navbar />
  <div className="Back__To__Top">
  <Container>
    <div className="blog">
      <div className="cards">
        {loading && <div>...</div>}
        {postData && (
          <div className="card">
            <div className="card-body">
            <img src={postData.image} alt="imagem" width="70%"/>
              <h1>{postData.title}</h1>
              <div className="line"></div>
              <h2>por {postData.author}</h2>
              <div className="line"></div>
              <p>{postData.text}</p>
              <div className="line"></div>
              <h3> categoria:{postData.category}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
    {is_visible && ( <>
              <span onClick={scrollToTop} className="scrolls"> <FiArrowUp /> </span><span className="ltx-hex"><span className="ltx-hex-inner"></span></span>  
              </>
          )}
  </Container>
  <Footer/>
  </div>
  </>
);
}

export default PostItem;
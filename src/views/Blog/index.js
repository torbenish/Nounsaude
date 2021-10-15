import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from 'react';
import { Container } from "./style";
import { FiArrowUp } from "react-icons/fi";

const Blog = () => {
  
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

  return (
    <>
      <Navbar />
      <div className="Back__To__Top">
      <Container>
        <h3>Buscar por Assunto</h3>
        <br/>
        <div className="subject">
        <button type="button" class="btn btn-primary-outline">Saúde</button>
        <button type="button" class="btn btn-primary-outline">Transição</button>
        <button type="button" class="btn btn-primary-outline">Exercicios</button>
        <button type="button" class="btn btn-primary-outline">Efeitos</button>
        <button type="button" class="btn btn-primary-outline">Remédios</button>
        <button type="button" class="btn btn-primary-outline">Hormônios</button>
        </div>
        <br/>
        <div className="author">
        <h3>Buscar por Autor</h3>
        <br/>
        <div className="subject">
        <button type="button" class="btn btn-primary-outline">Dr João Carlos</button>
        <button type="button" class="btn btn-primary-outline">Antônio José</button>
        <button type="button" class="btn btn-primary-outline">Segal Ohio</button>
        <button type="button" class="btn btn-primary-outline">Flávia Bezerra</button>
        <button type="button" class="btn btn-primary-outline">Dra. Andrea Muzza</button>
        <button type="button" class="btn btn-primary-outline">Tarso César</button>
        </div>
        </div>
        <div className="container d-flex mx-auto justify-content-center align-items-center h-100 ">
          <div className="row">
            <div className="col-12">
              <br/>
              <Card />
              <br/>
            </div>
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
};

export default Blog;

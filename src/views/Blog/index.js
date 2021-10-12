import Navbar from "../../components/Nav/Navbar";
import Card from "../../components/Card";
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
      if (window.pageYOffset > 100) {
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
        <h2>Buscar por Assunto</h2>
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
        <h2>Buscar por Autor</h2>
        <br/>
        <button type="button" class="btn btn-primary-outline">João</button>
        <button type="button" class="btn btn-primary-outline">Maria</button>
        <button type="button" class="btn btn-primary-outline">Rafael</button>
        <button type="button" class="btn btn-primary-outline">Antônio</button>
        <button type="button" class="btn btn-primary-outline">Pedro</button>
        <button type="button" class="btn btn-primary-outline">Rafaela</button>
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
      </div>
    </>
  );
};

export default Blog;

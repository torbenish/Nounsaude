import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react";
import { Container } from "./style";
import Gallery from "../../components/Carousel";
import { FiArrowUp } from "react-icons/fi";

import Principal from "../../components/Principal";
import CardProfile from "../../components/CardProfile";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [is_visible, set_visible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      set_visible(true);
    } else {
      set_visible(false);
    }
  };

  return (
    <>
      <Container>
        <Navbar />
        <div className="Back__To__Top">
          <Principal />
          <div className="home-container">
          <h1>Sem Preconceito, sem discriminação e com uma <span class="pink">equipe preparada!</span></h1>
          <br/>
          <p>
          Sabemos como é dificil, caro e exaustivo fazer a sua hormonioterapia. Por isso a Noun foi criada, para que você seja realmente você, sem preconceitos sem regras. Chega de perder horas procurando profissionais capacitados, aqui você conta com os melhores profissionais, prontos para lhe atender.
          </p>
          <h1>Um blog feito para você ter informações de verdade.</h1>
          <br/>
          <p>
          A Noun traz para você o BeYou Blog, nosso portal de informações, dicas de saúde, cuidados para a alimentação e bem estar. Tudo feito por especialistas e de graça!
          </p>
        </div>
        </div>
        <div className="CardProfile">
          <CardProfile />
        </div>

        {is_visible && (
          <>
            <span onClick={scrollToTop} className="scrolls">
              {" "}
              <FiArrowUp />{" "}
            </span>
            <span className="ltx-hex">
              <span className="ltx-hex-inner"></span>
            </span>
          </>
        )}
        <br />
        <div className="container-carousel">
        <h2>Além de tudo, você ainda ganha desconto com nossos parceiros:</h2>
        </div>
        <Gallery />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

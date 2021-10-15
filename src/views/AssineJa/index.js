import React from "react";
import { Container } from "./style";
import carrosel from "../../assets/img/carrosel.png";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
const AssineJa = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <img src={carrosel} alt="" height="100%" width="100%" />
    
  <div className="content">
    <div className="textBox">
      <br/>
      <h2>Já tentou procurar um médico para te atender e não achou?</h2>
      <p>Nós te entendemos, além de vencermos o preconceito no trabalho, na sociedade precisamos vencer até na hora de escolher um médico ou até na hora de iniciar nossa homonloterapia</p>
      <br/>
      <p>
        A Noun é mais que um plano de saúde, nós selecionamos uma equipe multidisciplinar totalmente capacitada para você ir muito mais longe e livre de preconceitos, incrível não é? :D Além de tudo isso, oferecemos desconto de farmácias, academia e outros estabelecimentos através do nosso time de parceiros.
      </p>
      <br/>
      <h5>Venha fazer parte dessa comunidade</h5>
      <br/>
      <a href="/signup">Fazer minha simulação</a>
      
      </div>

      <div className="card" width="80rem">
        <div className="cards">
          <h5 className="cardtitle">Planos mensais a partir de:</h5>
          <h2>R$ 69,90</h2>
          <p className="cardtext">Na Noun você paga apenas o que usa um plano feito de acordo com suas necessidades. Ao indicar um amigo você também ganha descontos especiais. Converse com nossos consultores e faça já sua simulação</p>
          <div className="simular">

        </div>
        </div>
      </div>
    </div>
    </Container>
    <br/>
    <br/>
    <Footer/>
    </>
  );
};

export default AssineJa;

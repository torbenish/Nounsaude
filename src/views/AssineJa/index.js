import React from "react";
import { Container } from "./style";
import siga from "../../assets/img/siga.jpg";

const AssineJa = () => {
  return (
    <Container>
        <div style={{ backgroundImage:`url(${siga})` }}>
         <div className="container d-flex mx-auto justify-content-center align-items-center h-100 ">
          <div className="row">
            <div className="col-md-12">
            <h1>Um plano de saúde, pensando para pessoas trans e não-binárias</h1>  
            </div>
            </div>         
          </div>
          <div className="row">
            <div className="col-6">
                <h1>Teste</h1>
            </div>
            <div className="col-6">
                <h1>Teste</h1>
            </div>            
          </div>
        </div>
    </Container>
  );
};

export default AssineJa;

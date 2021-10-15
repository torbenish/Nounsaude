import imgprincipal from "../../assets/img/imagemprincipal.jpg";
import { PrincipalStyle } from "./style";
import logo from "../../assets/img/logo.png";
import Botao from "../Botao";

export default function Principal() {
  return (
    <PrincipalStyle>
      <div className="estiloPrincipal">
        <img src={imgprincipal} />
        <img src={logo} className="logo" />
        <div className="intro">
          <h1>Viva sua verdadeira vida.</h1>
          <p>
            Um plano de saúde para afirmação de gênero e terapia hormonal na
            palma da sua mão.
          </p>
        </div>
      </div>
    </PrincipalStyle>
  );
}
